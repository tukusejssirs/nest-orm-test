import {Module} from '@nestjs/common'
import {StatusService} from './status.service'
import {StatusController} from './status.controller'
import {MikroOrmModule} from '@mikro-orm/nestjs'
import {Status} from './status.entity'
import {ConfigModule} from '@nestjs/config'

@Module({
	imports: [MikroOrmModule.forFeature([Status]), ConfigModule],
	providers: [StatusService],
	controllers: [StatusController]
})
export class StatusModule {}
