import { initializeDataBase } from './manager.database/mysql.initialize';
import * as ormConfig from '../../orm.config.json';
import { initializeModels } from './manager.model/model.initialize';

const initialize = async() => {
    console.log('Initializing Database\n');

    await initializeDataBase(ormConfig.tables);

    console.log('\nInitializing Model\n');

    initializeModels(ormConfig.tables);
}

initialize();
