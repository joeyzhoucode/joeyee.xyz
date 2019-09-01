class ClipsCafeChannel < ApplicationCable::Channel
  def subscribed
    if valid_stream?(params)
      stream_from(build_stream_id(params))
    end
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def broadcast(data)
    user = current_user
    group_name = data['group_name']
    content = data['content']

    raise 'No group_name!' if group_name.blank?
    group = get_group(group_name)
    raise 'No group found!' if group.blank?
    raise 'No content!' if content.blank?

    group.users << user unless group.users.include?(user)

    Message.create!(
      group: group,
      user: user,
      content: content
    )
  end

  private

  def get_group(name)
    Group.find_by(name: name)
  end

  def valid_stream?(params)
    params[:app_name].present? &&
    params[:group_name].present? &&
    params[:connection_type].present?
  end

  def build_stream_id(params)
    "#{params[:app_name]}-#{params[:group_name]}:#{params[:connection_type]}"
  end
end
