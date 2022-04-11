export const pick = <O extends object, K extends keyof O>(obj: O, keys: Array<K>): Pick<O, K> =>
	keys.reduce(
		(acc, key) =>
			({
				...acc,
				[key]: key in obj ? obj[key] : null
			}),
		{} as O
	)
