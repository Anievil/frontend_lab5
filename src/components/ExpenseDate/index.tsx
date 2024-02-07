import moment from 'moment';
import React from 'react';


interface IProps {
  date: string | Date
}

const ExpenseDate = ({date}: IProps) => {
  const momentDate = moment(date)
  const month = momentDate.format('MMMM')
  const year = momentDate.format('YYYY')
  const day = momentDate.format('D')
	return (
		<div className="expense-date">
			<div className="expense-date__month">{month}</div>
			<div className="expense-date__year">{year}</div>
			<div className="expense-date__day">{day}</div>
		</div>
	);
}

export default ExpenseDate;
