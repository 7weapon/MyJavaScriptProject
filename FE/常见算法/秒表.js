/**
 * Created by chenkai3 on 2016/4/26.
 */

function Method(isPause) {
    "use strict";
    var counter = 0, timer =1 ;
    if(isPause)
    {
        clearTimeout(timer);
        timer = null;
    }

    return function test() {
        if (timer) {
            console.log(++counter);
            timer= setTimeout(test, 1000);
        }
    }
}


Method()();




