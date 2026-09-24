const mongoose = require('mongoose');
// Data Access Object for Contact model

const contactSchema = new mongoose.Schema({
    name: String,
    email: {type: String, required: true },
    subject: String,
    message: String,
    status: {type: Number, default: 0 },
    creation: { type: Date, default: Date.now } 
});

const contactModel = mongoose.model('contact', contactSchema);

//CRUD operations for Contact model
exports.create = async function(contactdata){
    const contact = new contactModel(contactdata);
    await contact.save();
    return contact;
};
exports.readAll = async function(){
    let lstContacts = await contactModel.find();
    return lstContacts;
};
exports.read = function(){};
exports.update = function(){};
exports.del = function(){};

//FOR TESTING **ONLY**
exports.deleteAll = async function(){
    await contactModel.deleteMany({});
};