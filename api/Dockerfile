FROM elixir:1.5.3

# Add default user for containers
RUN useradd -ms /bin/bash dockerman
USER dockerman

# Installing Phoenix
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phx_new.ez \
    && mix local.hex --force

# Define the project's workbase
VOLUME /api

# Copy project codebase into volume
COPY ./api /api

# Set default workspace for container
WORKDIR /api

CMD mix phx.server
