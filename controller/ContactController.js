const dao = require('../model/ContactDao');

exports.postCreate = async function(req, res){
    let newcontact = {};
    newcontact.name = req.body.txt_name;
    newcontact.email = req.body.txt_email;
    newcontact.subject = req.body.txt_subject;
    newcontact.message = req.body.txt_message;

    let contact = await dao.create(newcontact);
    if(contact._id){
        res.redirect('/index.html');
    } else {
        res.status(400);
    }
}

exports.getAll = async function(req, res){
    let lstContacts = await dao.readAll();
    res.status(200);
    res.send(lstContacts);
    res.end();
}