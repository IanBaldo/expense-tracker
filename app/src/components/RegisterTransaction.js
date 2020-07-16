import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';

const RegisterTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0)

    const submitTransaction = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: parseFloat(amount)
        }

        addTransaction(newTransaction);
        clearForm();
    }

    const clearForm = () => {
        setText('');
        setAmount(0);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={submitTransaction}>
                <div className="form-control">
                    <label>Text</label>
                    <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Enter name here..."/>
                </div>
                <div className="form-control">
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter Amount..."/>
                </div>
                <button type="submit" className="btn">Register Transaction</button>
            </form>
        </div>
    );
}

export default RegisterTransaction;
