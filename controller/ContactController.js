const dao = require('../model/ContactDao');

exports.postCreate = async function(req, res){
    let newcontact = {};
    newcontact.name = req.body.txt_name;
    newcontact.email = req.body.txt_email;
    newcontact.subject = req.body.txt_subject;
    newcontact.message = req.body.txt_message;

    await dao.create(newcontact);

    res.redirect('/index.html');
}