/**
 * Copyright (c) 2015-2017 Zuoyebang, All rights reseved.
 * @fileoverview
 * @author ChenKai | chenkai@zuoyebang.com
 * @version 1.0 | 2018/2/24 | ChenKai    // 初始版本
 */

"use strict";

const tpl = (str, data) => {
  const tplStr = str.replace(/\n/g, '')
    .replace(/{{(.*?)}}/g, (match, p) => `'+${p}+'`)
    .replace(/{@(.+?)@}/g, (match, p) => `'; ${p}; tpl+= '`);

  return new Function('data', `var tpl = '${tplStr}'; return tpl;`)(data);
}

let str = `
  {@ if( data.con > 20 ) { @}
        <p>ifififififif</p>
    {@ } else { @}
        <p>elseelseelseelse</p>
    {@ } @}

    {@ for(var i = 0; i < data.list.length; i++) { @}
    	<p>{{i }} : {{ data.list[i] }}</p>
    {@ } @}
`;

console.log(tpl(str, {con: 21, list: [1, 2, 3, 4, 5, 6, 7]}));