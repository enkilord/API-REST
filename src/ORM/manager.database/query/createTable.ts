import { Table } from '../../orm.interface.config';

export const createTableQuery = (table: Table): string => {
    var hasKeys = false;
    var query = `CREATE TABLE ${table.name} (id int PRIMARY KEY AUTO_INCREMENT,`;
    var keys = '';

    table.parameters.forEach((parameter) => {
        query += `${parameter.name} ${parameter.db_type} ${!parameter.nullable ? 'NOT NULL' : ''}, `;
        if (parameter.foreign_key !== '') keys += `FOREIGN KEY (${parameter.name}) REFERENCES ${parameter.foreign_key}(id), `;
    });

    query = (query + keys).replace(/\,\s$/, ');');

    return query;
}