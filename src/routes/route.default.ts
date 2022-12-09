import { debug } from 'console';
import { User } from '../models/User';
import { UserRepository } from '../repositories/User.repository';

const register = async(req: any, res: any) => {    
    const userRepo = new UserRepository();

    const username = req.body.username;

    var user: User = await userRepo.findBy({name: 'username', value: username});

    console.log(user);
    

    if (user !== undefined) {
        res.sendStatut()
    }

    if (req.body.password === undefined) {
        debug ('password missing');
    }

    user = new User(
        2,
        username,
        req.body.password,
        req.body.email,
        req.body.adresse,
        0
    );

    res.send(await userRepo.add(user));
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
            register(req, res);

        case '/login':
            login(req, res);

        case '/users':
            getUsers(req, res);
    };
};
