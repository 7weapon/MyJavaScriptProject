/**
 * Created by HawkingChan on 16/2/3.
 */

'use strict';

var map = new Map()

map.set('0', 'zero').set('1', 'one');

for(var key of map.keys())
{
    console.log(key);
}

for(var value of map.values())
{
    console.log(value);
}

for(var item of map.entries())
{
    console.log(item[0] +' = '+item[1])
}

map.forEach(function(value,key){
    console.log(key + ' = '+value);
},map)
