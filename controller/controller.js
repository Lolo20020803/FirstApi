const User = require("../model/userModel");

function getUsuarioById(req,res){
    User.findById(req.params.id,(err,userData)=>{
    if(err) {
        return res.status(400).send(error.message);
    }
    return res.send(userData)
    });
}


function createUser(req,res){
    const newUser = new User(req.body);

    newUser.save((err,userInfo)=>{
        if(err) return res.status(400).send('Error in controller: ${err.message}');
        return res.status(200).userInfo
    });

}


module.exports ={
getUsuarioById,
createUser};
