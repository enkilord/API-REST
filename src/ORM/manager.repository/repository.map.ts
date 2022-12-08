import { Table } from './../orm.interface.config';
import { indent } from './../orm.utils';

export const mapModelContent = (table: Table): string => {
    var content = `mapModelToDb = (model: ${table.name}): DB_Parameter[] =>\n` +
    `${indent()}[\n`;

    table.parameters.forEach(parameter => {
        content += `${indent()}${indent()}{\n` +
            `${indent()}${indent()}${indent()}name: '${parameter.name}',\n` +
            `${indent()}${indent()}${indent()}value: model.${parameter.name}.toString()\n` +
            `${indent()}${indent()}},\n`
    });

    return `${content}${indent()}];\n`
} 