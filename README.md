<a id="top"></a>
# Angular2ClientServer
* [Introduction](#intro)

* [Build the Code](#build)

* [Run the Code](#run)

* [View of Front Page](#front-page)

<a id="intro"></a>
## Introduction [top](#top)

This is an Angular2 project that separates the front end, client, from the backend, server.  The backend has express and 'space' for Mongo.  The secret is in server/app/app.js, and these lines:

```
if (app.get('env') === 'development') {
	// This will change in production since we'll be using the dist folder
	app.use(express.static(path.join(__dirname, '../../client/dist')));
```

The above will serve the client Angular 2 stuff.

<a id="build"></a>
## Build the Code [top](#top)
Some version info:

```
node -v
v6.10.0
npm -v @angular/cli
3.10.10
```

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.24.

First, clone the repository. In the directory where you want the root, do a git clone. It will create a Angular2ClientServer directory and get all the code inside that directory:
```
git clone https://github.com/amnotafraid/Angular2ClientServer.git
```
In the Angular2ClientServer/client directory, install the software needed like this:
```
npm install
```
And then build it:
```
ng build --watch
```
In the Angular2ClientServer/server directory:
```
npm install
```
<a id="run"></a>
##Run the code [top](#top)
Rather than using ```ng serve```, which serves the app from memory, this application uses server-lite to serve the app from the disk.  This makes it possible for the server side to 'find' it.  To run the client side, you can do this:
```
npm run dev
```
This is going to serve the app at http://localhost:4200.  The port is configured in client\bs-config.json.  The ```ng build --watch``` command will 'watch' for code changes and rebuild.
 
To start the software in the server directory, Angular2ClientServer/server, you need to have nodemon installed.  To check if it is installed, you can try this from the command line:
```
npm list -g -depth=0 | grep "nodemon"
```
If you see it, all is well.  If you don't, you can install it like this:
```
npm install -g nodemon
```
Then, from Angular2ClientServer/server directory, you can serve it like this:
```
npm test
```

Open up a browser at http://localhost:3000. You should see your app:

<a id="front-page">
## </a> [top](#top)
![app works](https://cloud.githubusercontent.com/assets/1727761/23677480/ea81095e-0345-11e7-925d-f4702a600f0d.png)
<a id="host"></a>
