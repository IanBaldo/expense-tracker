import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amountList = transactions.map(transaction => transaction.amount);
    const balance = amountList.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>R$ { balance }</h1>
        </div>
    );
}

export default Balance;
