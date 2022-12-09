import { mapModelContent } from './repository.content.map';
import { updateModelContent } from './repository.content.update';
import { addModelContent } from './repository.content.add';
import { getMultipleModelContent } from './repository.content.get.multiple';
import { getSingleModelContent } from './repository.content.get.single';
import { Table } from "../orm.interface.config";
import { indent } from '../orm.utils';
import { deleteModelContent } from './repository.content.delete';

const getRepositoryContent = (table: Table): string => 
    `${getSingleModelContent(table.name)}\n` +
    `${getMultipleModelContent(table.name)}\n` +
    `${addModelContent(table.name)}\n` +
    `${updateModelContent(table.name)}\n` +
    `${deleteModelContent(table.name)}\n` +
    `${mapModelContent(table)}\n`;

const getImportContent = (tableName: string): string =>
    'import * as dbConn from \'../ORM/manager.database/mysql.connector\'\n' +
    'import { selectQuery } from \'../ORM/manager.database/query/select\'\n' +
    'import { insertQuery } from \'./../ORM/manager.database/query/insert\'\n' +
    'import { updateQuery } from \'./../ORM/manager.database/query/update\'\n' +
    'import { deleteQuery } from \'../ORM/manager.database/query/delete\'\n' +
    'import { DB_Parameter } from \'../ORM/manager.database/fixtures/interface.fixture\'\n' +
    `import { ${tableName} } from \'../models/${tableName}\'\n`;

export const createRepositoryContent = (table: Table): string => 
    `${getImportContent(table.name)}\n` +
    `export class ${table.name}Repository {\n` +
    `${getRepositoryContent(table)}}`;