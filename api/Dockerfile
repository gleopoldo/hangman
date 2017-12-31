FROM elixir:1.5.3-alpine

# Default user settings
ARG user_id
ARG username

# Create a new user
RUN adduser -u $user_id -D $username

# Installing Phoenix
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phx_new.ez \
    && mix local.hex --force

# Copy project codebase into volume
COPY ./api /api

# Set default workspace for container
WORKDIR /api

CMD bash
