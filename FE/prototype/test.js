/**
 * Created by HawkingChan on 16/4/25.
 */
function Book(title, publisher) {
    this.title = title;
    this.publisher = publisher;
}

Book.prototype.sayTitle = function () {
    console.log(this.title);
};

var book1 = new Book('js','kk');

console.log(book1.__proto__);
console.log(book1.constructor);
console.log(Book.constructor);
console.log(Book.prototype);

