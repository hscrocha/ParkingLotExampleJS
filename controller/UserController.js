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

exports.login = async function(req, res){
    let plogin = req.body.txt_login;
    let user = await dao.findLogin(plogin);

    if(user == null){ //login not found, redirect to login page displaying error
        res.redirect('login.html?error=1');
    } else {
        //login found, check passwords
        if(passUtil.comparePassword(req.body.txt_pass, user.password)){
            //password matched with hashed one, login & pwd ok
            console.log("login sucessfull");

            //Save the user in the session
            req.session.user = user;
            res.redirect('index.html');
        }
        else{ // passwords do not match, redirect to login page displaying error
            res.redirect('login.html?error=1');
        }
    } 
}

exports.loggedUser = function(req,res){
    res.status(200); // 200 = Ok
    res.send( req.session.user ); //send the logged user
    res.end(); 
}

exports.logout = function(req, res){
    req.session.user = null; // user info no longer in session (logout)
    res.redirect('index.html');
}
