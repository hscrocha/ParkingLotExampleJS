const dao = require('../model/UserDao');
const passUtil = require('../util/PasswordUtil');

exports.postCreateOrUpdate = function(req,res){
    let newuser = {}; //empty obj
    newuser.login = req.body.txt_login;
    newuser.password = passUtil.hashPassword(req.body.txt_pass);
    if(req.body.txt_perm){ // if permission data was sent
        newuser.permission = parseInt(req.body.txt_perm); //we fetch permission
        // For security this is incomplete, we still need to check if current logged user has permission
    } else {
        newuser.permission = 2;
    }

    if(req.body.txt_id){
        //update user
        newuser._id = req.body.txt_id;
        console.log('Update user');
        dao.update(newuser);
    }
    else{
        //insert user
        dao.create(newuser);        
    }
    res.redirect('index.html');
}