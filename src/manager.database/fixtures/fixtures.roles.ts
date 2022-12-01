import { DB_Parameter } from '../query/interface.parameter';
import { insertQuery } from '../query/insert';

export const getRolesFixtures = (): DB_Parameter[] => {
    const adminRole: DB_Parameter = { name: 'name' ,value: 'ROLE_ADMIN'};
    const userRole: DB_Parameter = { name: 'name' ,value: 'ROLE_USER'};

    return [adminRole, userRole];
};