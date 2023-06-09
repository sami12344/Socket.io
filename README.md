<h1 align = "center" >

![image](/images/Socket.io_logo.png.png)
Socket.io
</h1>
<h4 align="center">Socket.IO is a library that enables low-latency, bidirectional and event-based communication between a client and a server.</h4>

<p align="center"><a href="https://replit.com/@socketio/socketio-minimal-example" rel="nofollow"><img src="https://camo.githubusercontent.com/3ca4ba16a11789522394dcdb9a5ab325ba4235b0ccb4c9953b6b234c9ccc3994/68747470733a2f2f7265706c2e69742f62616467652f6769746875622f736f636b6574696f2f736f636b65742e696f" alt="Run on Repl.it" data-canonical-src="https://repl.it/badge/github/socketio/socket.io" style="max-width: 100%;"></a>
<a href="#backers"><img src="https://camo.githubusercontent.com/41257ef18442e417285a652cf8a2fd994890f6f6d41660dba071d95ee449fcfe/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f736f636b6574696f2f6261636b6572732f62616467652e737667" alt="Backers on Open Collective" data-canonical-src="https://opencollective.com/socketio/backers/badge.svg" style="max-width: 100%;"></a> <a href="#sponsors"><img src="https://camo.githubusercontent.com/c636f02d172a7f189754e9f2996f316afaff5de39df918fd33a846d7035fa65e/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f736f636b6574696f2f73706f6e736f72732f62616467652e737667" alt="Sponsors on Open Collective" data-canonical-src="https://opencollective.com/socketio/sponsors/badge.svg" style="max-width: 100%;"></a>
<a href="https://github.com/socketio/socket.io/actions"><img src="https://github.com/socketio/socket.io/workflows/CI/badge.svg" alt="Build Status" style="max-width: 100%;"></a>
<a href="https://www.npmjs.com/package/socket.io" rel="nofollow"><img src="https://camo.githubusercontent.com/edfde2e9382e2a523f45160d7390aa6a09de12c26ad9d3da0dff71f368e81297/68747470733a2f2f62616467652e667572792e696f2f6a732f736f636b65742e696f2e737667" alt="NPM version" data-canonical-src="https://badge.fury.io/js/socket.io.svg" style="max-width: 100%;"></a>
<a target="_blank" rel="noopener noreferrer nofollow" href="https://camo.githubusercontent.com/adfabd06710c283e2604a780a97232d921ba881bb334f166a9b2b2e925d824af/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f736f636b65742e696f2e7376673f7374796c653d666c6174"><img src="https://camo.githubusercontent.com/adfabd06710c283e2604a780a97232d921ba881bb334f166a9b2b2e925d824af/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f736f636b65742e696f2e7376673f7374796c653d666c6174" alt="Downloads" data-canonical-src="https://img.shields.io/npm/dm/socket.io.svg?style=flat" style="max-width: 100%;"></a>
<a href="https://slackin-socketio.now.sh" rel="nofollow"><img src="https://camo.githubusercontent.com/0066c383e9ca65935c08657390c318aac63253a3f83f47801cb1c667721dc312/68747470733a2f2f736c61636b696e2d736f636b6574696f2e6e6f772e73682f62616467652e737667" alt="" data-canonical-src="https://slackin-socketio.now.sh/badge.svg" style="max-width: 100%;"></a></p>

<p align="center">
  <a href="#About">About</a> •
  <a href="#Features">Features</a> •
  <a href="#Installation">Installation</a> •
  <a href="#How to use">How to use</a> •
  <a href="#Documentation">Documentation</a> •
  <a href="#Debug/logging">Debug/logging</a> •
  <a href="#Testing">Testing</a> •
  <a href="#Sponsors">Sponsors</a> •
  <a href="#License">License</a> •
	
</p>

## About


Socket.IO is an open-source library for real-time web applications that enables bi-directional communication between a web client and a server. It uses WebSockets as the primary transport protocol, but also supports fallback options such as long-polling and JSONP, which make it compatible with older browsers that do not support WebSockets.

The main advantage of Socket.IO is that it allows real-time, event-based communication between a client and a server. This means that data can be sent and received in real-time, without the need for the client to continuously refresh the page or send requests to the server. This makes Socket.IO an ideal choice for applications that require real-time updates, such as chat applications, online games, and collaborative editing tools.

Socket.IO works by establishing a WebSocket connection between the client and the server. Once the connection is established, both the client and the server can send events to each other, which are handled by event listeners. Events can contain any type of data, including JSON objects, strings, and binary data.

Socket.IO also supports rooms and namespaces, which allow multiple clients to join a specific channel and communicate with each other. This makes it easy to implement group chat rooms or multiplayer games, where players can interact with each other in real-time.

Overall, Socket.IO is a powerful and flexible library that makes it easy to implement real-time communication in web applications. Its support for fallback options and its ability to work with older browsers make it an ideal choice for building applications that need to work across a wide range of devices and platforms.
## Features

Socket.IO enables real-time bidirectional event-based communication. It consists of:

- a Node.js server (this repository)
- a [Javascript client library](https://github.com/socketio/socket.io-client) for the browser (or a Node.js client)

Some implementations in other languages are also available:

- [Java](https://github.com/socketio/socket.io-client-java)
- [C++](https://github.com/socketio/socket.io-client-cpp)
- [Swift](https://github.com/socketio/socket.io-client-swift)
- [Dart](https://github.com/rikulo/socket.io-client-dart)
- [Python](https://github.com/miguelgrinberg/python-socketio)
- [.NET](https://github.com/doghappy/socket.io-client-csharp)
- [Rust](https://github.com/1c3t3a/rust-socketio)

Its main features are:

#### Reliability

Connections are established even in the presence of:
  - proxies and load balancers.
  - personal firewall and antivirus software.

For this purpose, it relies on [Engine.IO](https://github.com/socketio/engine.io), which first establishes a long-polling connection, then tries to upgrade to better transports that are "tested" on the side, like WebSocket. Please see the [Goals](https://github.com/socketio/engine.io#goals) section for more information.

#### Auto-reconnection support

Unless instructed otherwise a disconnected client will try to reconnect forever, until the server is available again. Please see the available reconnection options [here](https://socket.io/docs/v3/client-api/#new-Manager-url-options).

#### Disconnection detection

A heartbeat mechanism is implemented at the Engine.IO level, allowing both the server and the client to know when the other one is not responding anymore.

That functionality is achieved with timers set on both the server and the client, with timeout values (the `pingInterval` and `pingTimeout` parameters) shared during the connection handshake. Those timers require any subsequent client calls to be directed to the same server, hence the `sticky-session` requirement when using multiples nodes.

#### Binary support

Any serializable data structures can be emitted, including:

- [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) and [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) in the browser
- [ArrayBuffer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) and [Buffer](https://nodejs.org/api/buffer.html) in Node.js

#### Simple and convenient API

Sample code:

```js
io.on('connection', socket => {
  socket.emit('request', /* … */); // emit an event to the socket
  io.emit('broadcast', /* … */); // emit an event to all connected sockets
  socket.on('reply', () => { /* … */ }); // listen to the event
});
```

#### Cross-browser

Browser support is tested in Sauce Labs:

[![Sauce Test Status](https://saucelabs.com/browser-matrix/socket.svg)](https://saucelabs.com/u/socket)

#### Multiplexing support

In order to create separation of concerns within your application (for example per module, or based on permissions), Socket.IO allows you to create several `Namespaces`, which will act as separate communication channels but will share the same underlying connection.

#### Room support

Within each `Namespace`, you can define arbitrary channels, called `Rooms`, that sockets can join and leave. You can then broadcast to any given room, reaching every socket that has joined it.

This is a useful feature to send notifications to a group of users, or to a given user connected on several devices for example.


**Note:** Socket.IO is not a WebSocket implementation. Although Socket.IO indeed uses WebSocket as a transport when possible, it adds some metadata to each packet: the packet type, the namespace and the ack id when a message acknowledgement is needed. That is why a WebSocket client will not be able to successfully connect to a Socket.IO server, and a Socket.IO client will not be able to connect to a WebSocket server (like `ws://echo.websocket.org`) either. Please see the protocol specification [here](https://github.com/socketio/socket.io-protocol).

## Installation

```bash
// with npm
npm install socket.io

// with yarn
yarn add socket.io
```

## How to use

The following example attaches socket.io to a plain Node.JS
HTTP server listening on port `3000`.

```js
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
  client.on('event', data => { /* … */ });
  client.on('disconnect', () => { /* … */ });
});
server.listen(3000);
```

### Linked up HTML


<h1 align = "center" > 

![image](/images/snippet1.png)

</h1>


### Standalone

```js
const io = require('socket.io')();
io.on('connection', client => { ... });
io.listen(3000);
```

### Module syntax 

```js
import { Server } from "socket.io";
const io = new Server(server);
io.listen(3000);
```

### In conjunction with Express

Starting with **3.0**, express applications have become request handler
functions that you pass to `http` or `http` `Server` instances. You need
to pass the `Server` to `socket.io`, not the express application
function. Also make sure to call `.listen` on the `server`, not the `app`.

```js
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);
```

### In conjunction with Koa

Like Express.JS, Koa works by exposing an application as a request
handler function, but only by calling the `callback` method.

```js
const app = require('koa')();
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(3000);
```

### In conjunction with Fastify

To integrate Socket.io in your Fastify application you just need to
register `fastify-socket.io` plugin. It will create a `decorator`
called `io`.

```js
const app = require('fastify')();
app.register(require('fastify-socket.io'));
app.io.on('connection', () => { /* … */ });
app.listen(3000);
```

### Predefined Events

<p>There are two types of predefined events in socket. Those are Server side events and Client side events</p>

#### Server Side Events 

<h1 align="center">

![image](/images/predifnedServerSideEvents.png)

</h1>


 #### Client Side Events

<h1 align="center">

![image](/images/predifnedClientSideEvents.png)

</h1>

## Documentation

Please see the documentation [here](https://socket.io/docs/).

The source code of the website can be found [here](https://github.com/socketio/socket.io-website). Contributions are welcome!

## Debug / logging

Socket.IO is powered by [debug](https://github.com/visionmedia/debug).
In order to see all the debug output, run your app with the environment variable
`DEBUG` including the desired scope.

To see the output from all of Socket.IO's debugging scopes you can use:

```
DEBUG=socket.io* node myapp
```

## Testing

```
npm test
```
This runs the `gulp` task `test`. By default the test will be run with the source code in `lib` directory.

Set the environmental variable `TEST_VERSION` to `compat` to test the transpiled es5-compat version of the code.

The `gulp` task `test` will always transpile the source code into es5 and export to `dist` first before running the test.


## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/socketio#backer)]

<a href="https://opencollective.com/socketio/backer/0/website" target="_blank"><img src="https://opencollective.com/socketio/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/1/website" target="_blank"><img src="https://opencollective.com/socketio/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/2/website" target="_blank"><img src="https://opencollective.com/socketio/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/3/website" target="_blank"><img src="https://opencollective.com/socketio/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/4/website" target="_blank"><img src="https://opencollective.com/socketio/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/5/website" target="_blank"><img src="https://opencollective.com/socketio/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/6/website" target="_blank"><img src="https://opencollective.com/socketio/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/7/website" target="_blank"><img src="https://opencollective.com/socketio/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/8/website" target="_blank"><img src="https://opencollective.com/socketio/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/9/website" target="_blank"><img src="https://opencollective.com/socketio/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/10/website" target="_blank"><img src="https://opencollective.com/socketio/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/11/website" target="_blank"><img src="https://opencollective.com/socketio/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/12/website" target="_blank"><img src="https://opencollective.com/socketio/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/13/website" target="_blank"><img src="https://opencollective.com/socketio/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/14/website" target="_blank"><img src="https://opencollective.com/socketio/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/15/website" target="_blank"><img src="https://opencollective.com/socketio/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/16/website" target="_blank"><img src="https://opencollective.com/socketio/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/17/website" target="_blank"><img src="https://opencollective.com/socketio/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/18/website" target="_blank"><img src="https://opencollective.com/socketio/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/19/website" target="_blank"><img src="https://opencollective.com/socketio/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/20/website" target="_blank"><img src="https://opencollective.com/socketio/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/21/website" target="_blank"><img src="https://opencollective.com/socketio/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/22/website" target="_blank"><img src="https://opencollective.com/socketio/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/23/website" target="_blank"><img src="https://opencollective.com/socketio/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/24/website" target="_blank"><img src="https://opencollective.com/socketio/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/25/website" target="_blank"><img src="https://opencollective.com/socketio/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/26/website" target="_blank"><img src="https://opencollective.com/socketio/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/27/website" target="_blank"><img src="https://opencollective.com/socketio/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/28/website" target="_blank"><img src="https://opencollective.com/socketio/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/socketio/backer/29/website" target="_blank"><img src="https://opencollective.com/socketio/backer/29/avatar.svg"></a>


## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/socketio#sponsor)]

<a href="https://opencollective.com/socketio/sponsor/0/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/1/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/2/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/3/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/4/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/5/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/6/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/7/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/8/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/9/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/10/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/11/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/12/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/13/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/14/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/15/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/16/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/17/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/18/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/19/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/20/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/21/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/22/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/23/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/24/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/25/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/26/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/27/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/28/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/socketio/sponsor/29/website" target="_blank"><img src="https://opencollective.com/socketio/sponsor/29/avatar.svg"></a>


## License

[MIT](LICENSE)
