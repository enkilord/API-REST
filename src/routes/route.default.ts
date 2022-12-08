import { debug } from 'console';
import { User } from '../models/User';
import { UserRepository } from '../repositories/User.repository';

const register = (req: any, res: any) => {    
    console.log(req.body);

    const userRepo = new UserRepository();

    const username = req.body.username;

    const user: User = userRepo.findBy({name: 'username', value: username});

    if (user !== undefined) {
        debug (user);
    }

    if (req.body.password === undefined) {
        debug ('password missing');
    }

    
};

const login = (req: any, res: any) => {    
    console.log(req.body);
    
};

const getUsers = (req: any, res: any) => {    
    console.log(req.body);
    
};

export const defaultRoutesManager = (req: any, res: any): any => {
    switch (req.url) {
        case '/register':
            register(req, res)

        case '/login':
            login(req, res);

        case '/users':
            getUsers(req, res);
    };
};
