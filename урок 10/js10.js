'use strict';

let books = document.querySelectorAll('.books');
let book = document.querySelectorAll('.book');
books[0].insertBefore(book[1], book[0]);
books[0].appendChild(book[2]);
books[0].insertBefore(book[4], book[3]);
// заменить задний фон
document.querySelector('body').style.backgroundImage = 'url(./image/profile.jpg)';
// исправить название 3 книги
book[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';
// удалить рекламу
document.querySelector('.adv').remove();
// восстановить порядок главы №2
let chapters = document.querySelectorAll('ul');
let topic2 = chapters[1].querySelectorAll('li');
chapters[1].insertBefore(topic2[8], topic2[4]);
chapters[1].insertBefore(topic2[6], topic2[8]);
chapters[1].insertBefore(topic2[2], topic2[10]);
// восстановить порядок главы №5
let topic5 = chapters[4].querySelectorAll('li');
chapters[4].insertBefore(topic5[2], topic5[6]);
chapters[4].insertBefore(topic5[9], topic5[3]);
chapters[4].insertBefore(topic5[5], topic5[8]);
console.log(topic5);