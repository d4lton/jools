### JOOLS

A basic webpack-based website. The name is based off "Jewels," which is the working title of a simple game I was working on.

#### INSTALLING

You will need GIT and NodeJS/NPM installed on your machine.

Clone the repository into some directory on your computer:

- `git clone https://github.com/d4lton/jools.git`

Change directory into the `jools` directory, and then install the required Node packages:

- `npm install`

#### RUNNING

- `npm start`

#### BUILDING

To package up the site, run the following command:

- `npm run build`

This will pack the site files into the build directory. The contents of the build directory can then be deployed on any web server.

#### DOCKER

To build a Docker image that will run the site using NGINX, run this command:

- `npm run docker:build`

You can start and stop the Docker image with these commands:

- `npm run docker:start`

and

- `npm run docker:stop`
