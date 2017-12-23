FROM elixir:1.5.3
MAINTAINER gabrielleopferreira@gmail.com

# Installing HEX package manager
RUN mix local.hex

# Installing Phoenix
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phx_new.ez

VOLUME /api

WORKDIR /api

CMD 'bash'
