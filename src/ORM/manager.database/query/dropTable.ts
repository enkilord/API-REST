import { Table } from '../../manager.orm/orm.interface.config'

export const dropTableQuery = (table: Table): string => {
    var query = `DROP TABLE ${table.name}`;

    return `DROP TABLE ${table.name}`;
}