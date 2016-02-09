/**
 * Created by HawkingChan on 16/2/9.
 */
'use strict';

function Timer() {
    this.seconds = 0;
    setInterval(()=>this.seconds++, 1000);
}

var timer = new Timer();
setTimeout(()=>console.log(timer.seconds), 3100);