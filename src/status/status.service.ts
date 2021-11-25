import {Injectable} from '@nestjs/common'
import {InjectRepository} from '@mikro-orm/nestjs'
import {Status} from './status.entity'
import {EntityRepository} from '@mikro-orm/postgresql'
import {ConfigService} from '@nestjs/config'
import {CreateStatusDto} from './create-status.dto'

@Injectable()
export class StatusService {
	constructor(
		@InjectRepository(Status)
		private readonly statusRepository: EntityRepository<Status>,
		private readonly configService: ConfigService
	) {}

	async createStatus(createStatusDto: CreateStatusDto): Promise<Status> {
		const status = new Status(createStatusDto.createdAt, createStatusDto.program, createStatusDto.green, createStatusDto.yellow, createStatusDto.red, createStatusDto.isTurnedOff, createStatusDto.error)
		await this.statusRepository.persistAndFlush(status)

		return status
	}
}
