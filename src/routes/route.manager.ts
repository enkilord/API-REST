import { Request, Response } from 'express';
import * as ormConfig from '../../orm.config.json';

export const routeManager = (req: Request, res: Response) => {
    console.log(req);

    for (const table of ormConfig.tables) {
        for (const route of table.routes) {
            if (new RegExp(route.uri).test(req.url)) {
                console.log(`yay victor : ${table.name}`);
                Reflect.apply()
            }
        }
    }
}