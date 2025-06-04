# Cypress + React Application

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## CI/CD
Upon Pull request into Master branch, Cypress tests will run before merging

## Setup
Requires Node/npm installed

To start, run `npm install` to install required dependencies

## Available Scripts

In the project directory, you can run:

### `npm start` or `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run cypress:open`

Runs Cypress tests in interactive mode

### For running in headless mode with generated reports:
`npm run cypress-ci:win` for Windows

`npm run cypress-ci` for linux (used by GitHub Actions)

`npm run cypress:slow` for a video recording
