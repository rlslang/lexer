export const isIdentifiableChar = (char: string) =>
	/^[a-zA-Z0-9_]$/.test(char)
