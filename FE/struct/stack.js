/**
 * Created by HawkingChan on 16/4/20.
 */
"use strict";

class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;
    }

    push(el) {
        this.dataStore[this.top++] = el;
    }

    pop() {
        return this[--this.top];
    }

    clear() {
        this.top = 0;
    }

    length() {
        return this.dataStore.length;
    }
}

function isPalindrome(word)
{
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return true;
    } else {
        return false;
    }
}

  console.log(isPalindrome('aaraa'));
