type SumFunction = (numbers: number[]) => number;

export const sum: SumFunction = (numbers) => {
	return numbers.reduce((acc, num) => acc + num, 0);
};
