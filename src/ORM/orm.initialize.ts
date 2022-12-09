import { selectQuery } from './manager.database/query/select';
import * as ormConfig from '../../orm.config.json';
import { initializeDataBase } from './manager.database/mysql.initialize';
import { initializeModels } from './manager.model/model.initialize';
import { initializeRepositoy } from './manager.repository/repository.initialize';
import * as dbConn from './manager.database/mysql.connector';

const initialize = async () => {
    // database
    console.log('Initializing Database\n');

    await initializeDataBase(ormConfig.tables);

    // models
    console.log('\nInitializing Model\n');

    initializeModels(ormConfig.tables);

    // routes
    console.log('\nInitializing Repositories\n');

    initializeRepositoy(ormConfig.tables);
}

initialize();
