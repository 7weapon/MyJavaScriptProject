/**
 * Created by chenkai3 on 2016/1/18.
 */

'use strict';

var promise = new Promise(function(resolve,reject){
    throw new Error('err loading');
})

promise.catch(function(err){
    console.error(err);
})