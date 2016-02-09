/**
 * Created by HawkingChan on 16/2/4.
 */
'use strict';

//let set = new Set();

/*
 [2,3,4,5,2,2,3,1].map(x=>set.add(x));

 for(let i of set)
 {
 console.log(i);
 }*/
/*
 set.add(NaN);
 set.add(NaN);

 console.log(set.size);*/

/*set.add({});
 set.add({});

 console.log(set.size);*/

let set = new Set([1, 3, 2, 2, 4]);

set.forEach((value, key)=>console.log(value * 2));
