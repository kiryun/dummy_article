const config = require('../config/environment');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    config.mysql.database,
    config.mysql.username,
    config.mysql.password, {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // name: Sequelize.STRING,
    // last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    salt: Sequelize.STRING,
    // image: Sequelize.STRING
});

const Article = sequelize.define('article', {
    article_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    u_id: {
        type: Sequelize.INTEGER,
        // users 테이블의 id
        references: {
            model: 'users',
            key: 'id'
        }
    },
    title: Sequelize.STRING,
    image: Sequelize.STRING,
    author: Sequelize.STRING,
    data_published: Sequelize.STRING,
    body: Sequelize.STRING,
    publisher: Sequelize.STRING,
    url: Sequelize.STRING,
    
})

// const Category = sequelize.define('category', {
//     article_id: {
//         type: Sequelize.INTEGER,
//         references: {
//             model: 'articles',
//             key: 'article_id'
//         }
//     },
//     name: Sequelize.STRING,
//     parentID: Sequelize.STRING
// })

module.exports = {
    sequelize: sequelize,
    User: User
}