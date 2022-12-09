import { defaultRoutesManager } from './route.default';

const defaultRoutes: string[] = [
    '/register',
    '/login',
    '/users'
];

export const routeManager = (req: any, res: any, next: any) => {
    console.log(req.url);

    if (defaultRoutes.includes(req.url)) {
        defaultRoutesManager(req, res);
    }
}