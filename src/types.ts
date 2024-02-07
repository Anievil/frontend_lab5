export interface IExpense {
	id: string;
	title: string;
	amount: number | string;
	date: string | Date;
}

export interface IStats {
	month: string;
	activity: number;
}