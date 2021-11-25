import {AppModule} from './app.module'
import {FastifyAdapter, NestFastifyApplication} from '@nestjs/platform-fastify'
import {NestFactory} from '@nestjs/core'
import {ConfigService} from '@nestjs/config'
import {RequestContext} from '@mikro-orm/core'
import {MikroORM} from '@mikro-orm/core'

async function bootstrap() {
	const configService = new ConfigService()
	const logLevel = configService.get<string>('LOG_LEVEL', 'warn')
	const orm = await MikroORM.init()
	const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({logger: {level: logLevel, prettyPrint: true}}))
	app.setGlobalPrefix('api')

	// Note: This is added as for @B4nan's recommendation.
	app.use((req, res, next) => RequestContext.create(orm.em, next))

	await app.listen(configService.get<number>('NEST_PORT', 3000))
}

bootstrap()
