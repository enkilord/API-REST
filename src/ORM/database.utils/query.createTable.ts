import { Table } from '../interface.orm.config';

export const createTableQuery = (table: Table): string => {
    var hasKeys = false;
    var query = `CREATE TABLE ${table.name} (id int PRIMARY KEY,`;
    var keys = '';

    table.parameters.forEach((parameter) => {
        query += `${parameter.name} ${parameter.type} ${!parameter.nullable ? 'NOT NULL' : ''},`;
        if (parameter.foreign_key !== '') keys += `FOREIGN KEY (${parameter.name}) REFERENCES ${parameter.foreign_key}(id),`;
    });

    query = (query + keys).replace(/\,$/, ');');

    return query;
}