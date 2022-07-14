import { Sequelize } from "sequelize";

const db = new Sequelize('routing_app', 'sam', 'Sam123#@!', {
    host: "localhost",
    dialect: "mysql"
});

export default db;