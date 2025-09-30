const dao = require('../model/ContactDao');

exports.createNewContact = async function(req, res){
    let newcontact = {}
    newcontact.name = req.body.txt_name;
    newcontact.email = req.body.txt_email;
    newcontact.subject = req.body.txt_subject;
    newcontact.message = req.body.txt_message;

    let contact = await dao.create(newcontact);
    if( contact._id == null){
        res.status(400);
    }
    else{
        res.redirect("index.html");
    }
}

exports.getAllContacts = async function(request, response){
    let lstContacts = await dao.readAll();
    response.status(200);
    response.send(lstContacts);
    response.end();
}