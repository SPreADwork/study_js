const money = prompt('Ваш месячный доход?'); // доход за месяц
const income = 'Фриланс'; // доп. доход
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); // расходы
// 4) Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
// вариант 1
const deposit = confirm('Есть ли у вас депозит в банке?');

const mission = 200000; // запланируванная сумма
const period = 12;
console.log(typeof(money), typeof(income), typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + '$');
console.log(addExpenses.toLowerCase(), addExpenses.split(', '));
const budgetDay = money / 30; // дневной бюджет
console.log(budgetDay);