import {Body, Controller, Get, Post} from '@nestjs/common'
import {CreateStatusDto} from './create-status.dto'
import {Status} from './status.entity'
import {StatusService} from './status.service'

@Controller('status')
export class StatusController {
	constructor(private readonly StatusService: StatusService) {}

	@Post()
	async createStatus(@Body() createStatusDto: CreateStatusDto): Promise<Status> {
		return await this.StatusService.createStatus(createStatusDto)
	}
}
