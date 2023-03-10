import { Table, Parameter } from '../orm.interface.config';
import { indent } from '../orm.utils';

const getConstructorContent = (table: Table): string => {
    const constructorContent = `${indent()}constructor (\n`;

    var constructorParametreContent = '';
    var constructorBodyContent = `${indent()}) {\n` +
        `${indent()}${indent()}super(id);\n`;

        table.parameters.forEach(parametre => {
            constructorParametreContent += `${indent()}${indent()}${parametre.name}: ${parametre.js_type},\n`;
            constructorBodyContent += `${indent()}${indent()}this.${parametre.name} = ${parametre.name};\n`; 
        });

    return `${constructorContent}${constructorParametreContent}${indent()}${indent()}id: number\n${constructorBodyContent}${indent()}}`;
}

const getParameterContent = (parameters: Parameter[]): string => {
    var parameterContent = '';

    parameters.forEach(parameter => {
        parameterContent += `${indent()}${parameter.name}: ${parameter.js_type};\n`;
    });

    return parameterContent;
}

export const createModelContent = (table: Table): string => 
    'import { Model } from "../ORM/manager.model/model"\n\n' + 
    `export class ${table.name} extends Model {\n` +
    `${getParameterContent(table.parameters)}\n` +
    `${getConstructorContent(table)}\n` +
    `}`;
