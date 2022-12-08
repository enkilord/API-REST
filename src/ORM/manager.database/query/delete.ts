import { DB_Parameter } from './../fixtures/interface.fixture';

export const deleteQuery = (tableName: string, id: string) =>
    `Delete from ${tableName} WHERE id = ${id}`;
