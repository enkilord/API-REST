import { indent } from "../orm.utils";

const getFindAll = (tableName: string): string =>
    `${indent()}findAll = async(): Promise<${tableName}[]> => {\n` +
    `${indent()}${indent()}const query = 'select * from ${tableName}';\n` +
    `${indent()}${indent()}var resModels: ${tableName}[] = [];\n` +
    `${indent()}${indent()}await dbConn.execute(query).then((res) => {\n` +
    `${indent()}${indent()}${indent()}res.forEach((model: ${tableName}) => resModels.push(model));\n` +
    `${indent()}${indent()}});\n\n` +
    `${indent()}${indent()}return resModels;\n` +
    `${indent()}}\n`;

const getFindAllByKey = (tableName: string): string => 
    `${indent()}findAllByKey = async(foreignTableName: string, foreignKey: number): Promise<${tableName}[]> => {\n` +
    `${indent()}${indent()}const query = selectQuery('${tableName}', [{ name: \`\${foreignTableName}Id\`, value: foreignKey.toString() }]);\n` +
    `${indent()}${indent()}var resModels: ${tableName}[] = []\n\n` +
    `${indent()}${indent()}await dbConn.execute(query).then((res) => {\n` +
    `${indent()}${indent()}${indent()}res.forEach((model: ${tableName}) => resModels.push(model));\n` +
    `${indent()}${indent()}});\n\n` +
    `${indent()}${indent()}return resModels;\n` +
    `${indent()}}\n`;

export const getMultipleModelContent = (tableName: string): string => 
    `${getFindAll(tableName)}\n` +
    `${getFindAllByKey(tableName)}`;
