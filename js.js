'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

let money, // доход за месяц
    income = 'Фриланс', // доп. доход
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'продукты, транспорт, комуналка'); // расходы
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

let mission = 200000, // запланируванная сумма
    period = 12;

do {
     money = prompt('Ваш месячный доход?');
    } while (!isNumber(money));  // isNaN(money) если переменная money не число     
    



console.log(typeof(money), typeof(income), typeof(deposit));
console.log(addExpenses.toLowerCase(), addExpenses.split(', '));

let expenses1, expenses2;

//1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth(){
    let sum = 0;

    for (let i = 0; i <2; i++) {

        if (i === 0) {
            expenses1 = prompt('Введите обязательную статью расходов?', 'продукты');   
        } else if (i === 1) {
            expenses2 = prompt('Введите обязательную статью расходов?', 'транспорт, комуналка');
        }
     do  {
        sum += +prompt('Во сколько это обойдется?');
     } while (!isNumber(sum));
    }
console.log(sum);
  return sum;
}


let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: ' + expensesAmount);

// 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
    return Number(money) - expensesAmount;
}
getAccumulatedMonth();

// Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth();

// Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
function getTargetMonth() {
    return Math.ceil(mission / accumulatedMonth);
}
getTargetMonth();

if (getTargetMonth() > 0) {
    console.log('Срок достижения цели :', (getTargetMonth() + ' месяцев'));
} else {
    console.log('Цель не будет достигнута');
}

// Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону 
const budgetDay = accumulatedMonth / 30; // дневной бюджет
console.log('Бюджет на день:', Math.floor(budgetDay));

/* 9) Написать конструкцию условий (расчеты приведены в рублях)	
Если budgetDay больше 1200, то “У вас высокий уровень дохода”
Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
Если отрицательное значение то вывести “Что то пошло не так”
Учесть варианты 0, 600 и 1200 */

let getStatusIncome = function(){
    if (budgetDay >= 1200) {
        return('У вас высокий уровень дохода');
    } else if (budgetDay >= 600 && budgetDay < 1200 ) {
        return('У вас средний уровень дохода');
    } else if (budgetDay < 600 && budgetDay >= 0) {
        return('К сожалению у вас уровень дохода ниже среднего');
    } else if (budgetDay < 0) {
        return('Что то пошло не так');   
    } 
};
console.log(getStatusIncome());
