<a id="top"></a>
#Angular2ClientServer
* [Introduction](#intro)

* [Build the Code](#build)

* [Run the Code](#run)

* [View of Front Page](#front-page)

* [Host the Code](#host)

<a id="intro"></a>
##Introduction [top](#top)

This is an Angular2 project that separates the front end, client, from the backend, server.  The backend has express and 'space' for Mongo.  The secret is in server/app.js, and these lines:

```
if (app.get('env') === 'development') {
	// This will change in production since we'll be using the dist folder
	app.use(express.static(path.join(__dirname, '../client/dist')));
```

The above will serve the client Angular 2 stuff.

<a id="build"></a>
##Build the Code [top](#top)
Some version info:

```
node -v
v6.0.0
mongo --version
MongoDB shell version: 3.2.0
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
ng build
```
In the Angular2ClientServer/server directory:
```
npm install
```
<a id="run"></a>
##Run the code [top](#top)
You can start the software in the client directory, Angular2ClientServer/client:
```
ng serve
```
The `ng serve` command will automatically compile changes for you, but the front end will be served by the server side.  So, if you do run `ng serve`, you can see the client side in http://localhost:4200, but you don't need to because it will be served by the server side.
 
Start the software in the server directory, Angular2ClientServer/server:
```
npm test
```
Open up a browser at http://localhost:3000. You should see your app:

<a id="front-page">
##</a> [top](#top)
![app works](https://cloud.githubusercontent.com/assets/1727761/23677480/ea81095e-0345-11e7-925d-f4702a600f0d.png)
<a id="host"></a>
##Host the code [top](#top)
I have instruction on how to host this code [here](https://amnotafraid.gitbooks.io/i-mean-it/content/hosting_on_bitnami.html)

