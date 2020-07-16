import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'} key={transaction.id}>
            {transaction.text}
            <span>{sign}R${Math.abs(transaction.amount)}</span>
            <button className="delete-btn"
                onClick={ e => deleteTransaction(transaction.id)}>x</button>
        </li>
    );
}

export default Transaction;
