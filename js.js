'use strict';

let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

let isString = function(a) {
    return !/[^,\sa-zA-ZА-яЁё]/g.test(a) && a.trim(); 
}; 

let money, // доход за месяц
    start = function(){
        do {
            money = prompt('Ваш месячный доход?', 20000);
           } while (!isNumber(money));  // isNaN(money) если переменная money не число            
    };

    start();

let appData = {
    budgetDay: 0, // бьюджет на день 
    budgetMonth: 0, // бьюджет на месяц
    expensesMonth: 0, // расход за месяц
    budget: +money, // доход за месяц
    income: {}, // доп. доход
    addIncome: [],
    expenses: {},
    addExpenses: [], // строка с перечислением дополнительных расходов
    deposit: false, // наличие депозита в банке
    percentDeposit: 0,
    moneyDeposit: 0,
    mission: 60000, // желаемая цель (Какую сумму хотите накопить)
    period: 12,
    asking: function() {

        if(confirm('Есть ли у вас дополнительный источник заработка?')) {
            let itemIncome = '';
            do { itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
            } while (!isString(itemIncome));
            let cashIncome = 0;
            do {cashIncome = prompt('Сколько в месяц вы на этом заробатываете?', 10000);
            } while (!isNumber(cashIncome));
            appData.income[itemIncome] = cashIncome;
        }

        let addExpenses = '';
        do { addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'продукты, транспорт, комуналка');
        } while (!isString(addExpenses));
        appData.addExpenses = addExpenses.toLowerCase(), addExpenses.split(', ');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

        for (let i = 0; i < 2; i++) {
            let str = '';
            do { str = prompt('Введите обязательную статью расходов?', 'транспорт, комуналка');
            } while (!isString(str));
            appData.expenses[str] = (function() {
            let userImput;
                do {
                userImput = prompt('Во сколько это обойдется?', 1000);
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
      return  Math.ceil(appData.mission / appData.budgetMonth);
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
        
    },
    getInfoDeposit: function() {
        if(appData.deposit) {
            let num1 = 0;
            do { num1 = prompt('Какой годовой процент?', 10);
            } while (!isNumber(num1));
            appData.percentDeposit = +num1;
            let num2 = 0;
            do { num2 = prompt('Какая сумма заложена?', 10000);
            } while (!isNumber(num2));
            appData.moneyDeposit = +num2;
        }
    },
    calcSavedMoney: function() {
       return appData.budgetMonth * appData.period;
    }

};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
console.log(appData);


console.log('Расходы за месяц: ' + appData.expensesMonth);

// Если getTargetMonth возвращает нам отрицательное значение, то вместо “Цель будет достигнута” необходимо выводить “Цель не будет достигнута”
if (appData.getTargetMonth > 0) {
    console.log('Срок достижения цели :', (appData.getTargetMonth + ' месяцев'));
} else {
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
}
















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









