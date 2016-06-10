/**
 * Created by FlukyChan on 2016/6/9.
 */

/**
 *  检测属性是否支持
 * @param property
 * @returns {boolean}
 */
function testProperty(property) {
    var root = document.documentElement;       //html
    if (property in root.style) {
        root.classList.add(property.toLowerCase());
        return true;
    }

    root.classList.add('no-' + property.toLowerCase());
    return false;
}
