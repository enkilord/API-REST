import { Request, Response } from 'express';
import { defaultRoutesManager } from './route.default';

const defaultRoutes: string[] = [
    '/register',
    '/login',
    '/users'
];

export const routeManager = (req: Request, res: Response) => {
    if (defaultRoutes.includes(req.url)) {
        defaultRoutesManager(req, res);
    }
}