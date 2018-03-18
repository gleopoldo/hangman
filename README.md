# hangman

The hangman game, built fir practicing english while having fun :)

### Dependencies

You must first install Docker and Docker-compose

- Docker version 17.09.1 or higher
- Docker-compose version 1.17.0 or higher

### Setup

First run `./scripts/hangman setup`.

In order to grant that every time you can just run `hangman` command,
you can add `alias hangman="<path-to-hangman>/scripts/hangman`
to your .bashrc or .zshrc

### Starting

Just run `hangman start` to start the project in port 8080.
Access it by opening your favorite browser and accessing `http://localhost:8080`.

### Tests

Run `hangman unit` to run your unit tests.

Run `hangman unit --coverage` in order to get a full coverage reports after
running the suite.

Run `hangman unit <name-of-file>` to run specs from a specific file (or directory)
