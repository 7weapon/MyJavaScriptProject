// 非正则实现
function getQueryString(key, url) {
  url = url || window.location.href;
  let search = url.split('?')[1];
  let arr = search.split('&');
  let filterArr = arr.filter((el) => {
    return el.split('=')[0] === key
  });
  return decodeURIComponent(filterArr[0].split('=')[1]);
}

// 正则实现
function getQueryString2(key, url) {
  url = url || window.location.href;
  let match = RegExp(`[?&]${key}=([^&]*)`).exec(url);
  return match && decodeURIComponent(match[1]);
}