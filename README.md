# IronSourceMan

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

# Following Instructions assumes you have Node.js installed on your machine

## View app on Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Optimized Build of the app

Run `npm run optibuild` in order to build a minified, AOT optimized production version of the app.
The script is making a use of hte `ng build` command, postfixed with relevant flags.

## View a Dockerized Optimized Build of the app

Run `npm run dockerize`. This command will execute a build and run of Dockerfile image build with the content from the dist folder of the app.
To see the app running on docker, wait for the script to finish and go to [http://localhost:80](http://localhost:80)
