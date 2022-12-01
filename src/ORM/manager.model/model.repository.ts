import { selectQuery } from './../manager.database/query/select';
import { Model } from "./model";
import * as dbConn from '../manager.database/mysql.connector';

export class ModelRepository {
    model: Model;

    constructor (model: Model) {
        this.model = model;
    }

    // findById = (id: number) => {
    //     const query = selectQuery()
    // };
}