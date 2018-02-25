/**
 * Copyright (c) 2015-2017 Zuoyebang, All rights reseved.
 * @fileoverview
 * @author ChenKai | chenkai@zuoyebang.com
 * @version 1.0 | 2018/2/24 | ChenKai    // 初始版本
 */

"use strict";

const Filters = {
  upper: str => str.toUpperCase()
}

class Tpl {
  constructor(config) {
    const defaultConfig = {
      signs: {
        varSign: ['{{', '}}'],
        evalSign: ['{@', '@}'],
        commentSign: ['<!--', '-->'],
        noCommentSign: ['{#', '#}'],
        endEvalSign: ['{/@', '@}']
      },
      syntax: true
    }

    this.config = Object.assign({}, defaultConfig, config || {})

    Object.keys(this.config.signs).forEach((key => {
      this.config.signs[key].splice(1, 0, '(.+?)')
      this.config.signs[key] = new RegExp(this.config.signs[key].join(''), 'g')
    }))
  }

  _compile(str, data) {
    let tpl = str.replace(/\n/g, '')
      .replace(this.config.signs.noCommentSign, '')
      .replace(this.config.signs.commentSign, (match, p) => {
        let exp = p.replace(/[\{\<\}\>]/g, match => `&*&${match.charCodeAt()}&*&`)
        return `'+'<!-- ${exp} -->'+'`
      })
      .replace(this.config.signs.varSign, (match, p) => {
        const filterIndex = p.indexOf('|')
        let val = p

        if (filterIndex !== -1) { // 存在过滤器
          const arr = val.split('|').map(s => s.trim()),
            filters = arr.slice(1) || [],
            oldVal = arr[0]

          val = filters.reduce((curVal, filterName) => {
            if (!Filters[filterName]) {
              throw new Error(filterName + ' isnt exsit')
              return
            }
            return `Filters['${filterName}'](${curVal})`
          }, oldVal)
        }

        return `'+${val}+'`
      })
      .replace(/\&\*\&(.*?)\&\*\&/g, (match, p) => String.fromCharCode(p))
      .replace(this.config.signs.evalSign, (match, p) => {
        let exp = p.replace('&gt;', '>')
          .replace('&lt;', '<')

        exp = this.config.syntax ? this._syntax(exp) : exp
        return `'; ${exp}; tpl +='`
      })
      .replace(this.config.signs.endEvalSign, () => "'} tpl += '")

    return new Function('data', `var tpl='${tpl}'; return tpl;`)(data)
  }

  _syntax(str) {
    let arr = str.trim().split(/\s+/)
    let exp
    if (arr[0] === 'if') {
      //if (xx) {
      exp = `if ( ${arr.slice(1).join(' ')} ) {`
    } else if (arr[0] === 'elif') {
      // else if (xx) {
      exp = `} else if ( ${arr.slice(1).join(' ')} ) {`
    } else if (arr[0] === 'else') {
      // } else {
      exp = `} else {`
    } else if (arr[0] === 'each') {
      // for ( var i = 0,len =xx.length; i < len; i++ ){
      exp = `for (var index = 0, len = ${arr[1]}.length;index < len; index++){var item = ${arr[1]}[index]`
    }
    return exp
  }

  compile(tplStr, data) {
    return this._compile(tplStr, data)
  }

}

let tpl = new Tpl()

let str = `
  {@ if data.con > 20 @}
    <p>ifififififif</p>
  {@ elif data.con === 20 @}
    <p>elseelseelseelseifififififif</p>
  {@ else @} 
    <p>elseelseelseelse</p>
  {/@ if @} 
  {@ each data.list as item @}
    <p>循环 {{ index + 1 }} 次: {{ item }}</p>
  {/@ each @}
  <p>{{data.name|upper}}</p>
`;

console.log(tpl.compile(str, {con: 21, list: [1, 2, 3, 4, 5, 6, 7], name: 'ChanKai'}));
