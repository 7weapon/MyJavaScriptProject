/**
 * Created by HawkingChan on 16/4/18.
 */
"use strict";

process.on('message', (m, server)=> {
    if (m === 'server') {
        server.on('connection', (socket)=> {
            socket.end('handled by child,pid is ' + process.pid + '+\n');
        })
    }
});