import { Request, Response } from 'express';
import { User } from '../models/User';
import { UserRepository } from '../repositories/User.repository';
import { hashPassword } from '../utils/hasher.password';

const register = async(req: Request, res: Response) => {    
    const userRepo = new UserRepository();

    const username = req.body.username;
    const password = req.body.password;

    var user: User = await userRepo.findBy({name: 'username', value: username});

    if (user !== undefined) return res.sendStatus(403);

    if (password === undefined) return res.sendStatus(401);

    user = new User(
        2,
        username,
        hashPassword(password),
        req.body.email,
        req.body.adresse,
        0
    );

    return res.send(await userRepo.add(user));
};

const login = (req: Request, res: Response) => {    

};

const getUsers = (req: Request, res: Response) => {    
    
};

export const defaultRoutesManager = (req: Request, res: Response): any => {
    switch (req.url) {
        case '/register':
            register(req, res);
            break;

        case '/login':
            login(req, res);
            break;

        case '/users':
            getUsers(req, res);
            break;
    };
};
