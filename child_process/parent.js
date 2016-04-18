/**
 * Created by HawkingChan on 16/4/18.
 */
"use strict";
let cp = require('child_process');
let child1 = cp.fork('./child.js');
let child2 = cp.fork('./child.js');

let server = require('net').createServer();

server.on('connection', (socket)=> {
    socket.end('handled by parent\n');
});

server.listen(1337,()=>{
    child1.send('server',server);
    child2.send('server',server);
    server.close();
}) ;