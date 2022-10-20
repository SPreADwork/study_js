'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
};

let money, // доход за месяц
    start = function(){
        do {
            money = prompt('Ваш месячный доход?');
           } while (!isNumber(money));  // isNaN(money) если переменная money не число            
    };

    start();

let appData = {
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    budget: +money,
    incame: {}, // доп. доход
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    mission: 60000,
    period: 12,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'продукты, транспорт, комуналка');
        appData.addExpenses = addExpenses.toLowerCase(), addExpenses.split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        function getExpensesMonth(){
            let sum = 0;
        
            for (let i = 0; i <2; i++) {
        
                if (i === 0) {
                   appData.expenses.expenses1 = prompt('Введите обязательную статью расходов?', 'продукты');   
                } else if (i === 1) {
                    appData.expenses.expenses2 = prompt('Введите обязательную статью расходов?', 'транспорт, комуналка');
                }
                let userImput;
                do {
                userImput = prompt('Во сколько это обойдется?');
                } while (!isNumber(userImput));
        
                sum += +userImput;
            }
          return sum;
        }
        appData.expensesMonth = getExpensesMonth();
        console.log('Расходы за месяц: ' + appData.expensesMonth);
    }
};
appData.asking();
console.log(appData);

// 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth() {
    return Number(appData.budget) - appData.expensesMonth;
}
appData.budgetMonth = getAccumulatedMonth();

// Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
function getTargetMonth() {
    return Math.ceil(appData.mission / appData.budgetMonth);
}
appData.period = getTargetMonth();

//Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
if (appData.period > 0) {
    console.log('Срок достижения цели :', (appData.period + ' месяцев'));
} else {
    console.log('Цель не будет достигнута');
}

// Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону 
appData.budgetDay = appData.budgetMonth / 30; // дневной бюджет
console.log('Бюджет на день:', Math.floor(appData.budgetDay));

/* 9) Написать конструкцию условий (расчеты приведены в рублях)	
Если budgetDay больше 1200, то “У вас высокий уровень дохода”
Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
Если отрицательное значение то вывести “Что то пошло не так”
Учесть варианты 0, 600 и 1200 */

let getStatusIncome = function(){
    if (appData.budgetDay >= 1200) {
        return('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200 ) {
        return('У вас средний уровень дохода');
    } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
        return('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay < 0) {
        return('Что то пошло не так');   
    } 
};
console.log(getStatusIncome());



// Вариант 2
// let deposit = prompt('Есть ли у вас депозит в банке?', 'да/нет');
// if (deposit === 'да') {
//     deposit = true;
// } else if (deposit === 'нет') {
//     deposit = false;
// } else {
//     deposit = 'Неправельный ввод!';
// }









