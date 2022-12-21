import { Request, Response } from 'express';
import { User } from '../../models/User';
import { UserRepository } from '../../repositories/User.repository';
import { hashPassword } from '../../utils/hasher.password';

export class UserRoutes {
    req: Request;
    res: Response;

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }

    @register
    async register () {
        const userRepo = new UserRepository();

        const username = this.req.body.username;
        const password = this.req.body.password;
    
        var user: User = await userRepo.findBy({name: 'username', value: username});
    
        if (user !== undefined) return this.res.sendStatus(403);
    
        if (password === undefined) return this.res.sendStatus(401);
    
        user = new User(
            2,
            username,
            hashPassword(password),
            this.req.body.email,
            this.req.body.adresse,
            0
        );
    
        return this.res.send(await userRepo.add(user));
    }
}