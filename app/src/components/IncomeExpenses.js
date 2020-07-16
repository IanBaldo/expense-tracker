import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const amountList = transactions.map( transaction => transaction.amount );
    const income = amountList
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2);
    const expense = amountList
        .filter(item => item < 0)
        .reduce((acc, item) => (acc -= item), 0)
        .toFixed(2);

    return (
        <div className="inc-exp-constainer">
            <div>
                <h4>Income</h4>
                <p className="money plus">{ income }</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{ expense }</p>
            </div>
        </div>
    );
};

export default IncomeExpenses;