const models = require('../../models/models')
const crypto = require('crypto')

//회원가입
exports.signUp = (req, res) =>{
    console.log("/user/signUp")
    let body = req.body

    let inputPassword = body.password
    let salt = Math.round((new Date().valueOf() * Math.random())) + ""
    let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex")
    // console.log(body.email)
    let email = body.email
    
    models.User.create({
        email: email,
        password: hashPassword,
        salt: salt
    }).then(result =>{
        res.status(201).json({
            id: result.dataValues.id,
            email: result.dataValues.email
        })
    }).catch(err => {
        console.log(err)
    })
    
}

//로그인
//email, pw 일치하면
//{id(user id), email} 응답.
exports.logIn = (req, res) => {
    console.log("/user/logIn")

    let body = req.body
    console.log(body.email)
    models.User.findOne({
      where: {
        email : body.email
      }
    }).then(result => {
        if(!result){
            console.log("없는 e-mail")
            return res.status(400).json({err: 'No such user email'})
        }
      
        let dbPassword = result.dataValues.password
        let inputPassword = body.password
        let salt = result.dataValues.salt
        let hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex")
        if(dbPassword === hashPassword){
          console.log("비밀번호 일치")
          res.status(201).json({
            id: result.dataValues.id,
            email: result.dataValues.email
          })
        }
        else{
          console.log("비밀번호 불일치")
          res.status(400).json({err: 'Incorrect password'})
        }
    }).catch(err => {
        console.log(err)
    })
}
