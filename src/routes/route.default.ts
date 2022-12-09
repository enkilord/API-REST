import { debug } from 'console';
import { Request, Response } from 'express';
import { User } from '../models/User';
import { UserRepository } from '../repositories/User.repository';

const register = async(req: Request, res: Response) => {    
    const userRepo = new UserRepository();

    const username = req.body.username;

    var user: User = await userRepo.findBy({name: 'username', value: username});

    console.log(user);

    if (user !== undefined) return res.sendStatus(403);

    if (req.body.password === undefined) return res.sendStatus(401);

    user = new User(
        2,
        username,
        req.body.password,
        req.body.email,
        req.body.adresse,
        0
    );

    const dbRes = await userRepo.add(user);

    console.log(dbRes);
    
    return res.send(dbRes);
    // return res.send(await userRepo.find(dbRes.insertId));
};

const login = (req: Request, res: Response) => {    
    console.log(req.body);

};

const getUsers = (req: Request, res: Response) => {    
    console.log(req.body);
    
};

export const defaultRoutesManager = (req: Request, res: Response): any => {
    switch (req.url) {
        case '/register':
            register(req, res);

        case '/login':
            login(req, res);

        case '/users':
            getUsers(req, res);
    };
};
