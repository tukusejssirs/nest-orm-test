import {EntityRepository} from '@mikro-orm/postgresql'
import {Status} from './status.entity'

export class StatusRepository extends EntityRepository<Status> {}
