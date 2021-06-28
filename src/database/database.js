import Sequelize  from 'sequelize';

export const sequelize = new Sequelize(
    'API-REST-Node',
    'postgres',
    'vega2021',
    {
        host: 'localhost',
        dialect: 'postgres',
        pool:{
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
);

