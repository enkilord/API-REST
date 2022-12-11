const hasher = require('simple-pass-hasher');
import { DATA_SOURCES } from '../../vars.config';

const hashConf = DATA_SOURCES.pwdHasherDataSource;

const getHasher = (u_password: string): typeof hasher => {
    return hasher({
        password: u_password,
        key: hashConf.KEY,
        algorithm: hashConf.ALGORITHM,
        encoding: hashConf.ENCODING, 
        hmac: hashConf.HMAC,
    });
}

export const hashPassword = (password: string): string => getHasher(password).digest;