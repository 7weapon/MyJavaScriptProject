/**
 * Created by HawkingChan on 16/4/18.
 */

"use strict";

let http = require('http');

let server = http.createServer((req, res)=> {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Handled by child,pid is ' + process.pid + '+\n');
});

process.on('message', (m, tcp)=> {
    if (m === 'server') {
        tcp.on('connection', (socket)=> {
            server.emit('connection', socket);
        });
    }
});