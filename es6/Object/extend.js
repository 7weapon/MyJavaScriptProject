/**
 * Created by chenkai3 on 2016/4/12.
 */
"use strict";
const user = {
    setName(name){
        this.name = name;
    },
    getName(){
        return this.name;
    }

}

user.setName('kk');

console.log(user.getName()) ;