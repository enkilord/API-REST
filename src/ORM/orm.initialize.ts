import * as ormConfig from '../../orm.config.json';
import { initializeDataBase } from './manager.database/mysql.initialize';
import { initializeModels } from './manager.model/model.initialize';
import { initializeRepositories } from './manager.repository/repository.initialize';
import { initializeRoutes } from './manager.route/route.initialize';

const initialize = async () => {
    // database
    console.log('Initializing Database\n');

    await initializeDataBase(ormConfig.tables);

    // models
    console.log('\nInitializing Model\n');

    initializeModels(ormConfig.tables);

    // repositories
    console.log('\nInitializing Repositories\n');

    initializeRepositories(ormConfig.tables);

    // routes
    console.log('\nInitializing Routes\n');

    initializeRoutes(ormConfig.tables);
}

initialize();
