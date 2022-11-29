'use strict';

let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');
books[0].insertBefore(book[1], book[0]);
books[0].appendChild(book[2]);
books[0].insertBefore(book[4], book[3]);
// заменить задний фон
document.querySelector('body').style.backgroundImage = 'url(./image/profile.jpg)';