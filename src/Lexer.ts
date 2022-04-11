import { ConveyorBelt } from '@rlsl/conveyor-belt'
import { isIdentifiableChar, pick } from './util'
import { Token } from './Token'
import { TokenType } from './TokenType'

const NormalTokenType = Object.freeze(
	pick(
		TokenType,
		[
			'LEFT_BRACE',
			'RIGHT_BRACE',

			'ASTERISK',
			'BACKTICK',
			'BACKSLASH',
			'COMMA',
			'DOLLAR',
			'EQUAL',
			'PIPE',
			'PLUS',
			'QUESTION',
		]
	)
)

export class Lexer {
	private chars: ConveyorBelt<string>
	constructor(code: string) {
		this.chars = new ConveyorBelt(code)
	}
	public getNextToken(): Token {
		const taken = this.chars.take()
		if (taken === null) return new Token(TokenType.EOF, '')
		if (taken === '\n') return new Token(TokenType.EOL, taken)
		if (taken === ' ') return new Token(TokenType.SPACE, taken)
		if (isIdentifiableChar(taken)) return new Token(TokenType.IDENTIFIER, `${taken}${this.chars.takeWhile(isIdentifiableChar)}`)
		{
			const foundKey = (Object.keys(NormalTokenType) as Array<keyof typeof NormalTokenType>).find(key => NormalTokenType[key] === taken) ?? null
			if (foundKey === 'DOLLAR' && this.chars.current === '{') return new Token(TokenType.INTERPOLATION_START, `${taken}${this.chars.take()}`)
			if (foundKey !== null) return new Token(NormalTokenType[foundKey], taken)
		}
		return new Token(TokenType.UNKNOWN, taken)
	}
}
