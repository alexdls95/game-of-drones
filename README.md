# Game Of Drones

This project is my first experience with the MEAN stack.  It has been developed with the aim of putting into practice my technical skills learned in the process of research on this technology.

It is a simple game of Paper, Rock, Scissors, in which it is easy to change or add new movements. 

The persistence of the information in the database has not yet been fully implemented, so data is lost if the server is shut down.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.3.

## Requirements

Install [npm](https://www.npmjs.com/get-npm)

## Start

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

The server runs on port 3000.

Running the `npm start` command concurrently executes the client and server services.

## Editing the game

You can edit the configuration of the game, since you have the possibility to add, eliminate or modify movements in a simple way, editing the file `game-of-drones/server/routes/move.js`.

## Build

Run `ng build` to build the project.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
