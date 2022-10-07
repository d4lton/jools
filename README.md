### JOOLS

A basic webpack-based website. The name is based off "Jewels," which is the working title of a simple game I was working on.

#### RUNNING

`$ npm start`

#### BUILDING

To package up the site, run the following command:

`$ npm run build`

This will pack the site files into the build directory. The contents of the build directory can then be deployed on any web server.

#### DOCKER

To build a Docker image that will run the site using NGINX, run this command:

`$ npm run docker:build`

You can start and stop the Docker image with these commands:

`$ npm run docker:start`

and

`$ npm run docker:stop`
