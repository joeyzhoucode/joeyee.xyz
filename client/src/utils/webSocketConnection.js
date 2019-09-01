import ActionCable from 'actioncable'

const PROTOCOL = window.location.protocol === "https:" ?  "wss://" : "ws://";
const BASE_URL = window.location.hostname === "localhost" ? "localhost:3001" : window.location.hostname;
const ACCESS_TOKEN = "accessToken";
const CLIENT_ID = "client";

function webSocketConnection(appName, connectionType, callback) {
  let accessToken = localStorage.getItem(ACCESS_TOKEN);
  let clientId = localStorage.getItem(CLIENT_ID);

  let wsUrl = PROTOCOL + BASE_URL + '/cable';
  wsUrl += '?access-token=' + accessToken + '&client-id=' + clientId;

  this.callback = callback;
  this.appName = appName;
  this.connectionType = connectionType;

  this.connection = ActionCable.createConsumer(wsUrl);
  this.webSocketConnections = {};
}

webSocketConnection.prototype.message = function(content, groupName) {
  let groupConnObj = this.webSocketConnections[groupName];
  if (groupConnObj) {
    groupConnObj.broadcast(content);
  } else {
    console.log('Error: Cannot find group connection');
  }
}

webSocketConnection.prototype.openNewGroup = function(groupName) {
  if (groupName !== undefined && !(groupName in this.webSocketConnections)) {
    this.webSocketConnections[groupName] = this.createWebSocketConnection(groupName);
  } else {
    this.webSocketConnections[groupName].consumer.connect();
  }
}

webSocketConnection.prototype.disconnect = function() {
  Object.values(this.webSocketConnections).forEach(c => {
    c.consumer.disconnect();
  });
}

webSocketConnection.prototype.createWebSocketConnection = function(groupName) {
  let scope = this;
  return this.connection.subscriptions.create({
    channel: scope.appName + "Channel",
    group_name: groupName,
    connection_type: scope.connectionType
  }, {
    connected: function() {
      console.log('Connected to ' + scope.appName + '. Group Name: ' + groupName + '. Connection Type: ' + scope.connectionType + '.');
    },
    disconnected: function() {
      console.log('Disconnected from ' + scope.appName + '. Group Name: ' + groupName + '. Connection Type: ' + scope.connectionType + '.');
    },
    received: function(data) {
      if (data.audience.indexOf(scope.userId) !== -1) {
        return scope.callback(data)
      }
    },
    broadcast: function(content) {
      return this.perform('broadcast', {
        group_name: groupName,
        user_id: scope.userId,
        content: content
      })
    }
  })
}

export default webSocketConnection;