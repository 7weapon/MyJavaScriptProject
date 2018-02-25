/**
 * Copyright (c) 2015-2017 Zuoyebang, All rights reseved.
 * @fileoverview
 * @author ChenKai | chenkai@zuoyebang.com
 * @version 1.0 | 2018/2/22 | ChenKai    // 简单填充数据
 */

var tpl = (str, data) => str.replace(/{{(.*)}}/g, (match, p) => data[p])
console.log(tpl('<div>{{title}}</div>', {title: '测试'}))