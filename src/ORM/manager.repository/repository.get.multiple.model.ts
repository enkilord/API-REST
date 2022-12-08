import { indent } from "../orm.utils";

const getFindAll = (tableName: string): string =>
    `${indent()}findAll = (): ${tableName}[] => {\n` +
    `${indent()}${indent()}const query = 'select * from ${tableName}';\n` +
    `${indent()}${indent()}var resModel: ${tableName}[] = [];\n\n` +
    `${indent()}${indent()}dbConn.execute(query, [])\n` +
    `${indent()}${indent()}.then((res) => resModel = Object(res)[0]);\n\n` +
    `${indent()}${indent()}return resModel;\n` +
    `${indent()}}\n`;

const getFindAllByKey = (tableName: string): string => 
    `${indent()}findAllByKey = (foreignTableName: string, foreignKey: number): Object[] => {\n` +
    `${indent()}${indent()}const query = selectQuery('${tableName}', [{ name: \`\${foreignTableName}Id\`, value: foreignKey.toString() }]);\n` +
    `${indent()}${indent()}var resObj: Object[] = [];\n\n` +
    `${indent()}${indent()}dbConn.execute('select * from Role', []).then((res) => {\n` +
    `${indent()}${indent()}${indent()}Object(res).forEach((element: any) => resObj.push(element));\n` +
    `${indent()}${indent()}});\n\n` +
    `${indent()}${indent()}return resObj;\n` +
    `${indent()}}\n`;

export const getMultipleModelContent = (tableName: string): string => 
    `${getFindAll(tableName)}\n` +
    `${getFindAllByKey(tableName)}`;
