const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" })


module.exports = {
    development: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || '*****',
        database: process.env.DB_NAME || 'test',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: false
    },
    test: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || null,
        database: process.env.DB_NAME_TEST || 'database_test',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'mysql'
    },
    production: {
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || null,
        database: process.env.DB_NAME_PRODUCTION || 'database_production',
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: 'mysql'
    }
};
