import {IsDate, IsInt, IsNotEmpty, Max, Min} from 'class-validator'

export class CreateStatusDto {
	@IsDate()
	createdAt: Date

	@IsNotEmpty()
	program: string

	@IsInt()
	@Min(0)
	@Max(1)
	green: number

	@IsInt()
	@Min(0)
	@Max(1)
	yellow: number

	@IsInt()
	@Min(0)
	@Max(1)
	red: number

	@IsInt()
	@Min(0)
	@Max(1)
	isTurnedOff: number

	@IsInt()
	@Min(0)
	@Max(1)
	error: number
}