export enum TokenType {
	UNKNOWN = 'UNKNOWN',

	EOF = 'EOF',
	EOL = 'EOL',
	SPACE = 'SPACE',
	TAB = 'TAB',

	IDENTIFIER = 'IDENTIFIER',
	INTEGER = 'INTEGER',
	TEXT = 'TEXT',

	LEFT_BRACE = '{',
	RIGHT_BRACE = '}',

	ASTERISK = '*',
	BACKTICK = '`',
	BACKSLASH = '\\',
	COMMA = ',',
	DOLLAR = '$',
	EQUAL = '=',
	QUESTION = '?',
	PIPE = '|',
	PLUS = '+',

	INTERPOLATION_START = '${',
}
Object.freeze(TokenType) // prevent mutability
