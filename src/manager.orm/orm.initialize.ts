import { initializeDataBase } from '../manager.database/mysql.initialize';
import * as ormConfig from '../../orm.config.json';

console.log('Initializing Database\n');

initializeDataBase(ormConfig.tables);

console.log('Initializing Model\n');
