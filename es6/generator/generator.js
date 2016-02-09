/**
 * Created by HawkingChan on 16/2/6.
 */
'use strict';

/*
 function* GeneratorTest() {
 yield 'hello';
 yield 'world';
 return 'ending';
 }

 var generator =  GeneratorTest();
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());
 console.log(generator.next());*/

function* test1Generator(i) {
    yield i + 1;
    yield* test2Generator(i);
    yield i + 10;
}


function* test2Generator(i) {
    yield i + 2;
    yield i + 3;
    yield i + 4;

}

var generator = test1Generator(10);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);