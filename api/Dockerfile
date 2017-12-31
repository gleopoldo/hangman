FROM elixir:1.5.3-alpine

# Default user settings
ARG user_id
ARG username
ARG app_path=/api

# Create a new user
RUN adduser -h $app_path -u $user_id -D $username

# Installing phoenix dependencies
RUN apk update \
    && apk add nodejs-current-npm inotify-tools

# Installing Phoenix
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phx_new.ez \
    && mix local.hex --force

# Copy project codebase into volume
COPY ./api $app_path

# Set default workspace for container
WORKDIR $app_path

CMD sh
