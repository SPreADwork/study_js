'use strict';
const money = prompt('Ваш месячный доход?'); // доход за месяц
const income = 'Фриланс'; // доп. доход
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'продукты, транспорт, комуналка'); // расходы
// Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)

// Вариант 1
// const deposit = confirm('Есть ли у вас депозит в банке?');

// Вариант 2
let deposit = prompt('Есть ли у вас депозит в банке?', 'да/нет');
if (deposit === 'да') {
    deposit = true;
} else if (deposit === 'нет') {
    deposit = false;
} else {
    deposit = 'Неправельный ввод!';
}
console.log(deposit);

/* 5) Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
“Введите обязательную статью расходов?” (например expenses1, expenses2)
“Во сколько это обойдется?” (например amount1, amount2)
в итоге 4 вопроса и 4 разные переменных */
const expenses1 = prompt('Введите обязательную статью расходов?', 'продукты');
const amount1 = prompt('Во сколько это обойдется?', '500');
const expenses2 = prompt('Введите обязательную статью расходов?', 'транспорт, комуналка');
const amount2 = prompt('Во сколько это обойдется?', '1000');

// 6) Вычислить бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную budgetMonth и вывести результат в консоль
let budgetMonth = +money - (Number(amount1) + Number(amount2)); 
if (Number(budgetMonth)) {
    console.log('Бюджет на месяц:', budgetMonth);
} else {
    console.log('Где-то есть ошибка');
}

const mission = 200000; // запланируванная сумма
const period = 12;
// console.log(typeof(money), typeof(income), typeof(deposit));
// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission + '$');
// console.log(addExpenses.toLowerCase(), addExpenses.split(', '));

// 7) Зная budgetMonth, посчитать за сколько месяцев будет достигнута цель mission, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)
console.log('Цель будет достигнута за :', Math.ceil(mission / budgetMonth) + ' месяцев');

// 8) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону 
const budgetDay = budgetMonth / 30; // дневной бюджет
console.log('Бюджет на день:', Math.floor(budgetDay));

/* 9) Написать конструкцию условий (расчеты приведены в рублях)	
Если budgetDay больше 1200, то “У вас высокий уровень дохода”
Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
Если отрицательное значение то вывести “Что то пошло не так”
Учесть варианты 0, 600 и 1200 */

if (budgetDay >= 1200) {
    console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600 && budgetDay < 1200 ) {
    console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay >= 0) {
    console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('Что то пошло не так');   
} 

//1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth(){
  return Number(amount1) + Number(amount2);
}
getExpensesMonth();

// 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
    return Number(money) - Number(getExpensesMonth());
}
getAccumulatedMonth();