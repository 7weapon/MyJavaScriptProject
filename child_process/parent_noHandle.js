/**
 * Created by HawkingChan on 16/4/18.
 */
"use strict";

let cp = require('child_process');
let child1 = cp.fork('./child_handle.js');
let child2 = cp.fork('./child_handle.js');

let server = require('net').createServer();

server.listen(1337, ()=> {
    child1.send('server', server);
    child2.send('server', server);
    server.close();
});