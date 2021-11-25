import {Logger} from '@nestjs/common'
import {Options} from '@mikro-orm/core'
import {SqlHighlighter} from '@mikro-orm/sql-highlighter'
import {TsMorphMetadataProvider} from '@mikro-orm/reflection'
import {ConfigService} from '@nestjs/config'
import cfg from '../config/getEnvConfig'

const logger = new Logger('MikroORM')
const configService = new ConfigService()

const config = {
	entities: ['dist/**/*.entity.js'],
	entitiesTs: ['src/**/*.entity.ts'],
	dbName: configService.get<string>('PSQL_DB_NAME_CS') || cfg()['PSQL_DB_NAME_CS'],
	type: 'postgresql',
	host: configService.get<string>('PSQL_HOST', 'localhost') || cfg()['PSQL_HOST'],
	port: configService.get<number>('PSQL_PORT', 5432) || cfg()['PSQL_PORT'],
	// FIXME: Consider disabling highlighting, for potential performance issues.
	highlighter: new SqlHighlighter(),
	debug: false,
	logger: logger.log.bind(logger),
	username: configService.get<string>('PSQL_USER') || cfg()['PSQL_USER'],
	password: configService.get<string>('PSQL_PASS') || cfg()['PSQL_PASS'],
	synchronize: true,
	metadataProvider: TsMorphMetadataProvider,
	// TODO: Use migrations; more info: https://en.wikipedia.org/wiki/Schema_migration
	migrations: {
		tableName: 'mikro_orm_migrations', // name of database table with log of executed transactions
		path: './migrations', // path to the folder with migrations
		pattern: /^[\w-]+\d+\.ts$/, // regex pattern for the migration files
		transactional: true, // wrap each migration in a transaction
		disableForeignKeys: true, // wrap statements with `set foreign_key_checks = 0` or equivalent
		allOrNothing: true, // wrap all migrations in master transaction
		dropTables: true, // allow to disable table dropping
		safe: true, // allow to disable table and column dropping; TODO: Do we need this to set to `true`?
		emit: 'ts' // migration generation mode
	}
} as Options

if (configService.get<string>('LOG_LEVEL', 'warn') === 'debug' || configService.get<string>('LOG_LEVEL', 'warn') === 'trace' || cfg()['LOG_LEVEL'] === 'debug' || cfg()['LOG_LEVEL'] === 'trace') {
	config.debug = true
}

export default config
