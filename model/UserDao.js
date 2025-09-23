// Call DBConnection on the Server.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: { type:String, alias:'email', required:true },
    password: String,
    permission: Number,
    creation: { type:Date, default:Date.now } 
});

const userModel = mongoose.model('user',userSchema);

exports.readAll = async function(){
    let users = await userModel.find();
    // Later try: find().sort({name:'asc'}).skip(0).limit(5);
    return users;
}

exports.read = async function(id){
    let user = await userModel.findById(id);
    return user;
}

exports.create = async function(newuser){
    const user = new userModel(newuser);
    await user.save();
    return user;
}

exports.del = async function(id){
    let user = await userModel.findByIdAndDelete(id);
    return user;
} 

exports.deleteAll = async function(){
    //should only be used on testing
    await userModel.deleteMany();
}

exports.update = function(user){
    // homework
    // https://mongoosejs.com/docs/api/query.html#Query.prototype.findOneAndUpdate()
    // https://mongoosejs.com/docs/api/model.html#Model.findByIdAndUpdate() 
}

exports.findLogin = async function(plogin){
    //Since the passwords are hashed, they needed to checked on the controller
    let user = await userModel.findOne({login:plogin});
    return user;
}