import { DB_Parameter } from './interface.parameter';

export const insertQuery = (tableName: string, parameters: DB_Parameter[]) => {
    var params = '';
    var vals = '';

    parameters.forEach((parameter) => {
        params += `${parameter.name}, `;
        vals += `'${parameter.value}', `;
    });

    return `INSERT INTO ${tableName} (${params.replace(/\,\s$/, ')')} VALUES (${vals.replace(/\,\s$/, ')')}`;
};