import { DB_Parameter } from './../fixtures/interface.fixture';

export const updateQuery = (tableName: string, parameters: DB_Parameter[], id: string) => {
    var params = '';

    parameters.forEach((parameter) => {
        params += `${parameter.name} = '${parameter.value}', `;
    });

    return `Update ${tableName} set ${params.replace(/\,\s$/, '')} WHERE id = ${id}`;
};