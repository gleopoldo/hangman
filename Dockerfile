FROM node:9.3.0-alpine

# Default user and user_id settings
ARG user_id
ARG username
ARG app_path=/hangman

# Remove nodejs image default node user (it causes UID conflicts)
# and sets the default one, using the given uid
RUN apk update && apk add yarn && \
    deluser --remove-home node && \
    adduser -u $user_id -h $app_path -D $username

USER $user_id

# copies the project inside the workspace directory
ADD . $app_path

# Set default workspace for container
WORKDIR $app_path

# default command - access the console
ENTRYPOINT /bin/sh
