const User = require('../models/User')

module.exports = (req,res)=>{
    User.create(req.body).then(()=>{
        console.log("User registered successfully")
    }).catch(error=>{
        console.log(error)
        // if(error){
        //     const validationErrors 0
        // }
        
    })
}