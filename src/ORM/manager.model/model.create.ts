import { mapParameter } from './interface.mapparameter';
import { Table, Parameter } from '../orm.interface.config';

const mapParameters: mapParameter[] = [];

const indent = (): string => '    ';

const getSetParameter = (parameter: Parameter): string =>
`${indent()}set ${parameter.name}(${parameter.name}: ${parameter.js_type}) {\n` +
`${indent()}this.${parameter.name} = ${parameter.name}\n` +
`${indent()}}`;

const getGetParameter = (parameter: Parameter): string =>
`${indent()}get ${parameter.name}(): ${parameter.js_type} {\n` +
`${indent()}return this.${parameter.name}\n` +
`${indent()}}`;

const getModelContent = (parameters: Parameter[]): string => {
    var modelContent = '';

    parameters.forEach((parameter) => {
        modelContent += `\n${getSetParameter(parameter)}\n`;
        modelContent += `\n${getGetParameter(parameter)}\n`;
    });

    return modelContent;
};

export const createModelContent = (table: Table): string => {
    const modelContent = 'import { Model } from "../manager.model/model"\n\n' + 
    `export class ${table.name} extends Model {\n` +
    `${getModelContent(table.parameters)}}`;

    return modelContent;
};