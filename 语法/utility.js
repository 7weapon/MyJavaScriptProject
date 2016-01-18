/**
 * Created by HawkingChan on 15/12/9.
 */

/**
 * 动态加载脚本
 * @param url  脚本地址
 * @param callback     回调函数
 */
function loadScript(url,callback)
{
    var script = document.createElement('script');
    script.type = 'text/script';
    if(script.readyState) //IE
    {
        script.onreadystatechange = function(){
            if(script.readyState == 'loaded' || script.readyState == 'complete')
            {
                script.onreadystatechange = null;
                callback();
            }
        }
    }else {
        script.onload = function () {
            callback();
        }
    }

    script.url = url;
    document.getElementsByTagName('head')[0].appendChild(script);

}