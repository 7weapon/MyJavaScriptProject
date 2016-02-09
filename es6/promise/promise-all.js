/**
 * Created by HawkingChan on 16/2/6.
 */
'use strict';

let p = Promise.resolve(3);

Promise.all([true, p]).then(values => {
        console.log(values);
    }
)
;