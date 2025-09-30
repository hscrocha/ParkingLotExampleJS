const controller = require("./ContactController");
const dao = require("../model/ContactDao");

jest.mock("../model/ContactDao");
beforeEach(function(){
    jest.clearAllMocks();
});

test('Get All Contacts',async function(){
    let req = {};
    let res = {};
    res.status = jest.fn();
    res.send = jest.fn();
    res.end = jest.fn();

    await controller.getAllContacts(req,res);

    expect(dao.readAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalled();
    expect(res.end).toHaveBeenCalled();
});

test('Create new contact', async function(){
    let req = { body:{ txt_name:'test name', txt_email:'email@a.com',
                    txt_subject:'sub', txt_message:'message test bla'
    } };
    let res = {};
    res.redirect = jest.fn();
    res.status = jest.fn();

    dao.create = jest.fn( async()=>( {_id:'1',name:'test name'} ) );

    await controller.createNewContact(req,res);

    expect(dao.create).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith("index.html");
});

test('Create new contact null id', async function(){
    let req = { body:{ txt_name:'test name', txt_email:'email@a.com',
                    txt_subject:'sub', txt_message:'message test bla'
    } };
    let res = {};
    res.redirect = jest.fn();
    res.status = jest.fn();

    dao.create = jest.fn( async()=>( {_id:null} ) );

    await controller.createNewContact(req,res);

    expect(dao.create).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalled();
    expect(res.redirect).not.toHaveBeenCalledWith("index.html");
});