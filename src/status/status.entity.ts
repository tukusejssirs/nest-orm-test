import {Entity, PrimaryKey, Property} from '@mikro-orm/core'

@Entity({schema: 'm1', tableName: 'status'})
export class Status {
	@PrimaryKey()
	id!: number

	@Property({columnType: 'TIMESTAMP WITH TIME ZONE', fieldName: 'datumcas'})
	createdAt = new Date()

	@Property({columnType: 'VARCHAR(32)', default: '', length: 32})
	program: string

	@Property({columnType: 'SMALLINT', fieldName: 'zelena'})
	green: number

	@Property({columnType: 'SMALLINT', fieldName: 'oranzova'})
	yellow: number

	@Property({columnType: 'SMALLINT', fieldName: 'cervena'})
	red: number

	@Property({columnType: 'SMALLINT', fieldName: 'vypnuty'})
	isTurnedOff: number

	@Property({columnType: 'SMALLINT', fieldName: 'chyba'})
	error: number

	constructor(createdAt: Date, program: string, green: number, yellow: number, red: number, isTurnedOff: number, error: number) {
		this.createdAt = createdAt
		this.program = program
		this.green = green
		this.yellow = yellow
		this.red = red
		this.isTurnedOff = isTurnedOff
		this.error = error
	}
}
