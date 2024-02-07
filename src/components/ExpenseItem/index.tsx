import React from 'react';
import ExpenseDate from '../ExpenseDate';
import { IExpense } from '../../types';

interface IProps {
	item: IExpense;
}

const ExpenseItem = ({ item: { title, date, amount } }: IProps) => {
	return (
		<div className="card expense-item">
			<ExpenseDate date={date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${amount}</div>
			</div>
		</div>
	);
};

export default ExpenseItem;
