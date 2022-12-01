import { DB_Parameter } from './interface.parameter';

export const selectQuery = (tableName: string, parameters: DB_Parameter[]) => {
    var params = ' where ';

    parameters.forEach((parameter) => {
        params += `${parameter.name} = ${parameter.value}, `;
    });

    return `select * from ${tableName}${parameters.length !== 0 ? params.replace(/\,\s$/, ')') : ''}`;
};