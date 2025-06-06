type GoodbyeFunction = (name: string) => string;

export const sayGoodbye: GoodbyeFunction = (word) => {
	return `Goodbye, ${word}!`;
};
