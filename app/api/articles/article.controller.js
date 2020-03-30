const models = require('../../models/models')

// article 생성
exports.create = (req, res) => {
    console.log("/article/create")

    let body = req.body
    let u_id = parseInt(req.body.u_id, 10)
    models.Article.create({
        u_id: u_id,
        title: body.title,
        // image: body.image,
        author: body.author,
        // data_published: body.data_published,
        body: body.body,
        // publisher: body.publisher,
        // url: body.url
    }).then(result => {
        res.status(201).json({
            article_id: result.dataValues.article_id,
            u_id: result.dataValues.u_id,
            title: result.dataValues.title,
            // image: result.dataValues.image,
            author: result.dataValues.author,
            // data_published: result.dataValues.data_published,
            body: result.dataValues.body,
            // publisher: result.dataValues.publisher,
            // url: result.dataValues.url
        })
    }).catch(err => {
        console.log(err)
    })
}

// article 받아오기
// client에서 받은 id(user id)로 article 찾기
// 찾은 articles 응답.
exports.articles = (req, res) => {
    console.log("/article/articles")

    let u_id = parseInt(req.body.u_id, 10)

    if(!u_id){
        return res.status(400).json({
            err: 'Incorrect id'
        })
    }

    models.Article.findAll({
        where: {
            u_id: u_id
        }
    }).then(result => {
        if(!result){
            console.log("없는 user id")
            return res.status(400).json({err: 'No such articles'})
        }

        // console.log(result)

        return res.status(201).json({
            result
        })
        
    }).catch(err => {
        console.log(err)
    })
    
}

//removeAll
exports.removeAll = (req, res) => {
    console.log("/article/removeAll")

    // let u_id = parseInt(req.body.u_id, 10)
    
    let u_id = parseInt(req.params.u_id, 10)

    if(!u_id){
        return res.status(400).json({
            err: 'Incorrect id'
        })
    }
    
    models.Article.destroy({
        where: {
            //u_id가 일치하는 모든 것
            u_id: u_id
        },

        // table 구조는 남긴다면 true
        truncate: true
    }).then( () => {
        return res.status(201).json({
            success: true
        })
    }).catch(err => {
        console.log(err)
    })
}