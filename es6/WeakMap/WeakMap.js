    /**
     * Created by HawkingChan on 16/2/4.
     */
    'use strict';
    var wmap = new WeakMap();
    /*
     wmap.set(1,'one');
     wmap.get(1);
     wmap.set(Symbol(),'symbol');
     wmap.get(Symbol());*/

    var obj = {key:'string'};
    wmap.set(obj, 'string 对象');
    console.log(wmap.get(obj));
    console.log(wmap.has(obj));