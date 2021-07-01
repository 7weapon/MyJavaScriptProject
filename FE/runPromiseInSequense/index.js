/**
 * Copyright (c) 2015-2018, All rights reseved.
 * @fileoverview
 * @author ChenKai
 * @version 1.0 | 2021/6/30 | ChenKai    // 初始版本
 */

function runPromiseInSequense(arr) {
    return arr.reduce((promiseChain, currentPromise) => {
        return promiseChain.then((chainResult) => {
            return currentPromise(chainResult).then((result) => result)
        })
    }, Promise.resolve())
}

function p1() {
    // return new Promise((resolve, reject) => {
    //     resolve(10)
    // })
    return Promise.resolve(10)
}

function p2(r) {
    return new Promise((resolve, reject) => {
        resolve(r * 2)
    })
}

function p3(r) {
    return new Promise((resolve, reject) => {
        resolve(r + 10)
    })
}

const arr = [p1, p2, p3]

const result = runPromiseInSequense(arr)
result.then((r) => {
    console.log(r)
})