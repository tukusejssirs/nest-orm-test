import config from '../config/getEnvConfig'
import {ConfigModule} from '@nestjs/config'
import {StatusModule} from './status/status.module'
import {MiddlewareConsumer, Module, NestModule} from '@nestjs/common'
import {MikroOrmMiddleware, MikroOrmModule} from '@mikro-orm/nestjs'

@Module({
	imports: [MikroOrmModule.forRoot(), StatusModule, ConfigModule.forRoot({load: [config]})],
	providers: [],
	controllers: []
})
export class AppModule implements NestModule {
	// Note: For some reason the auth middlewares in profile and article modules are fired before the request context one, so they would fail to access contextual EM. by registering the middleware directly in AppModule, we can get around this issue.
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(MikroOrmMiddleware).forRoutes('*')
	}
}
