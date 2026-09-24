const dao = require('../model/ContactDao');

exports.postCreate = async function(req, res){
    let contactdata = {}; //empty object to hold contact data
    contactdata.name = req.body.txt_name;
    contactdata.email = req.body.txt_email;
    contactdata.subject = req.body.txt_subject;
    contactdata.message = req.body.txt_message;

    let newcontact = await dao.create(contactdata);

    res.redirect('/index.html');
}