/**
 * Created by HawkingChan on 16/4/16.
 */

var http = new XMLHttpRequest();
http.open('http://www.baidu.com','?name=kk',true);
http.send(null);
http.onreadystatechange = function()
{
    "use strict";
     if(http.readyState ===4)
     {
         if(http.status === 200)
         {
             console.log(http.responseText) ;
         }
     }
}   ;
