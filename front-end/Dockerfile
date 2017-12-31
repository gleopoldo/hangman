FROM node:9.3.0-alpine

# Default user and user_id settings
ARG user_id
ARG username

# Remove nodejs image default node user (it causes UID conflicts)
# and sets the default one, using the given uid
RUN deluser --remove-home node && \
    adduser -u $user_id -D $username

# copies the project inside the workspace directory
COPY ./front-end /hangman
WORKDIR /hangman

# default command - access the console
CMD bash
