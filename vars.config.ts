require("dotenv").con;

export const DATA_SOURCES = {
    mySqlDataSource: {
        HOST: process.env.MY_SQL_DB_HOST,
        USER: process.env.MY_SQL_DB_USER,
        PASSWORD: process.env.MY_SQL_DB_PASSWORD,
        PORT: Number(process.env.MY_SQL_DB_PORT),
        DATABASE: process.env.MY_SQL_DB_DATABASE,
        CONNECTION_LIMIT: process.env.MY_SQL_DB_CONNECTION_LIMIT ? parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT) : 4,
    },
    jwtDataSource: {
        KEY: process.env.JWT_KEY,
        TOKEN_HEADER: process.env.JWT_TOKEN_HEADER,
    },
    pwdHasherDataSource: {
        KEY: process.env.PASSWORD_HASHER_KEY,
        ALGORITHM: process.env.PASSWORD_HASHER_ALGORITHM,
        ENCODING: process.env.PASSWORD_HASHER_ENCODING,
        HMAC: process.env.PASSWORD_HASHER_HMAC,
    }
};