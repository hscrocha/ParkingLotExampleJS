const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true },
    subject: String,
    message: String,
    status: {type: Number, default: 0 },
    creation: {type:Date, default: Date.now }
});

const contactModel = mongoose.model('contact', contactSchema);

// CRUD 
exports.create = async function(contactdata){
    let newContact = new contactModel(contactdata);
    await newContact.save();
    return newContact;
}
exports.read = function(){}
exports.readAll = async function(){
    let lstContacts = await contactModel.find();
    return lstContacts;
}
exports.update = function(){}
exports.del = function(){}
// SHOULD ONLY BE USED FOR TESTING 
exports.deleteAll = async function(){
    await contactModel.deleteMany({});
}