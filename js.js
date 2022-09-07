const money = prompt('Ваш месячный доход?'); // доход за месяц
const income = 'Фриланс'; // доп. доход
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'); // расходы
const deposit = new Boolean(true);
const mission = 200000; // запланируванная сумма
const period = 12;
console.log(typeof(money), typeof(income), typeof(deposit));
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission + '$');
console.log(addExpenses.toLowerCase(), addExpenses.split(', '));
const budgetDay = money / 30; // дневной бюджет
console.log(budgetDay);