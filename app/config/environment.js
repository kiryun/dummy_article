const environment = {
    development: {
        mysql: {
            username: 'root',
            password: 'beyondme',
            database: 'dummy_article'
        },

        sequelize: {
            force: false
        }
    },

    // test: {
    //     mysql: {
    //         username: 'root',
    //         password: 'beyondme',
    //         database: 'dummy_article_test'
    //     },
        
    //     sequelize: {
    //         force: true
    //     }
    // },

    // production: {

    // }
}

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = environment[nodeEnv];
