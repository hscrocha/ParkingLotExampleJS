const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    status: {type: Number, default:0 },
    creation: { type:Date, default:Date.now } 
});

const contactModel = mongoose.model('contact',contactSchema);

//CRUD
exports.create = async function(contactdata){
    let contact = new contactModel(contactdata); 
    await contact.save();
    return contact;
}

exports.readAll = async function(){
    let lstContacts = await contactModel.find();
    // Later try: find().sort({name:'asc'}).skip(0).limit(5);
    return lstContacts;
}
exports.readOne = async function(id){
    let contact = await contactModel.findById(id);
    return contact;
}

exports.update = function(){}
exports.deleteOne = function(){}

//Should **ONLY** be used for testing
exports.deleteAll = async function(){
    await contactModel.deleteMany();
}
