onconnect = (ev) => {
    const port = ev.ports[0];
    port.addEventListener('message', (e) => {
        const result = `worker: ${e.data}`;
        port.postMessage(result);
    });
    port.start();
};
