/**
 * Created by chenkai3 on 2016/4/19.
 */
"use strict";

onmessage = function (event) {
    var data = JSON.parse(event.data);
    var start = data.start;
    var end = data.end;
    var result = '';
    search:
        for (var n = start; n <= end; n++) {
            if(n % 2 ==0) continue search;
            result += n+',';
        }

    postMessage(result);
}

