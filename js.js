const money = prompt('Ваш месячный доход?'); // доход за месяц
const income = 'Фриланс'; // доп. доход
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'продукты, транспорт, комуналка'); // расходы
// 4) Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)

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
console.log(typeof(money), typeof(income), typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + '$');
console.log(addExpenses.toLowerCase(), addExpenses.split(', '));
const budgetDay = money / 30; // дневной бюджет
console.log(budgetDay);