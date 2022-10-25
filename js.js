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
    budgetDay: 0, // бьюджет на день 
    budgetMonth: 0, // бьюджет на месяц
    expensesMonth: 0, // расход за месяц
    budget: +money, // доход за месяц
    incame: {}, // доп. доход
    addIncome: [],
    expenses: {},
    addExpenses: [], // строка с перечислением дополнительных расходов
    deposit: false, // наличие депозита в банке
    mission: 60000, // желаемая цель (Какую сумму хотите накопить)
    period: 12,
    asking: function() {
        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'продукты, транспорт, комуналка');
        appData.addExpenses = addExpenses.toLowerCase(), addExpenses.split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            appData.expenses[prompt('Введите обязательную статью расходов?', 'транспорт, комуналка')] = (function() {
            let userImput;
                do {
                userImput = prompt('Во сколько это обойдется?');
                } while (!isNumber(userImput));
                return +userImput;
            })();
        }
        
    },
    getExpensesMonth: function() {
       for (let key in appData.expenses) {
        appData.expensesMonth += appData.expenses[key]; 
        }     
    },
         
    // 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
    getBudget: function() {
    appData.budgetMonth = Number(appData.budget) - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
    },

    // Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
    getTargetMonth: function() {
    return Math.ceil(appData.mission / appData.budgetMonth);
    },

    /* 9) Написать конструкцию условий (расчеты приведены в рублях)	
    Если budgetDay больше 1200, то “У вас высокий уровень дохода”
    Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
    Если budgetDay меньше 600 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
    Если отрицательное значение то вывести “Что то пошло не так”
    Учесть варианты 0, 600 и 1200 */

    getStatusIncome: function(){
    if (appData.budgetDay >= 1200) {
        return('У вас высокий уровень дохода');
    } else if (appData.budgetDay >= 600 && appData.budgetDay < 1200 ) {
        return('У вас средний уровень дохода');
    } else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
        return('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay < 0) {
        return('Что то пошло не так');   
    } 
}





};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log(appData);



// console.log('Расходы за месяц: ' + appData.expensesMonth);


// // Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
// if (appData.period > 0) {
//     console.log('Срок достижения цели :', (appData.period + ' месяцев'));
// } else {
//     console.log('Цель не будет достигнута');
// }

// // Поправить budgetDay учитывая бюджет на месяц, а не месячный доход. Вывести в консоль  округлив в меньшую сторону 
// appData.budgetDay = appData.budgetMonth / 30; // дневной бюджет
// console.log('Бюджет на день:', Math.floor(appData.budgetDay));




// Вариант 2
// let deposit = prompt('Есть ли у вас депозит в банке?', 'да/нет');
// if (deposit === 'да') {
//     deposit = true;
// } else if (deposit === 'нет') {
//     deposit = false;
// } else {
//     deposit = 'Неправельный ввод!';
// }









