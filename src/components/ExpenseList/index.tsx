import React from 'react';
import ExpenseItem from '../ExpenseItem';

import { expenses } from '../../contsans';

function ExpenseList() {
	return (
		<div className="card expenses">
			{expenses.map((expense) => (
				<ExpenseItem item={expense} key={expense.id} />
			))}
		</div>
	);
}

export default ExpenseList;
