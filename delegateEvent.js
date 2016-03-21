/**
 * Created by HawkingChan on 16/3/21.
 */
function delegateEvent(el, selector, type, fn) {
    if (el.addEventListener) {
        el.addEventListener(type, eventFn);
    } else {
        el.attachEvent('on' + type, eventFn);
    }
    function eventFn(e) {
        var e = e || window.e;
        var target = e.target || e.srcElement;

        if (matchSelector(target, selector)) {
            if (fn) {
                fn.call(target, e);
            }
        }
    }

}

function matchSelector(el, selector) {
    if (selector.charAt(0) === '#') {
        return el.id === selector.slice(1);
    }
    if (selector.charAt(0) === '.') {
        return el.className.indexOf(selector.slice(1)) != -1;
    }
    return el.tagName.toLowerCase() === selector.toLowerCase();

}