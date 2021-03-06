# joeyee.xyz

A gateway to all of my projects. Rails 5 API + PostgreSQL + Redis + React on Heroku.

## Getting started

First, navigate into the directory:

``` shell
cd joeyee.xyz
```

Then you must set up Rails Credentials for Omniauth, run:

``` shell
EDITOR="code --wait" bin/rails credentials:edit
```

In this editor, you must setup your secrets like so:

``` yml
google:

  # Get these by creating a Google OAuth Client ID
  client_id:
  client_secret:
```

Then, start the server and client locally:

``` shell
bundle
cd client
yarn install
cd ..
rake db:migrate
rake db:seed
rake start
```

Once you're ready to deploy to [Heroku](https://www.heroku.com), run:

``` shell
heroku apps:create
heroku buildpacks:add heroku/nodejs --index 1
heroku buildpacks:add heroku/ruby --index 2
heroku config:set RAILS_MASTER_KEY="$(< config/master.key)"
git push heroku master
heroku run rake db:seed
heroku open
```

To use the Redis add-on (e.g. for ActionCable), run:

``` shell
heroku addons:create redistogo:nano
heroku config | grep REDISTOGO_URL
```

And copy the `REDISTOGO_URL` into `cable.yml`:

``` yml
development:
  adapter: async

test:
  adapter: async

production:
  adapter: redis
  url: # REDISTOGO_URL
  channel_prefix: joeyee_production
```

## Inspirations
- jackschaedler.github.io
- bobbydreamer.com
- jefflombard.com
- worrydream.com
- ncase.me
- michaelfogleman.com