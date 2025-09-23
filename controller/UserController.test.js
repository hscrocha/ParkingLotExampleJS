const controller = require("./UserController");
const dao = require("../model/UserDao");

// Tell Jest to mock the whole module
jest.mock('../model/UserDao');

beforeEach(function(){
    jest.clearAllMocks(); //clear the counter for called functions
});

test('Controller New User',function(){
    let req = { body: { txt_login: 'test@t.com', txt_pass:'123456'}};
    let res = { redirect: jest.fn() }; // mock res.redirect() function

    controller.postCreateOrUpdate(req,res);

    expect(res.redirect).toHaveBeenCalledWith('index.html');
    expect(dao.create).toHaveBeenCalled();
    expect(dao.update).not.toHaveBeenCalled();
});

test('Controller Update User',function(){
    let req = { body: {txt_id:"A1", txt_perm:"1", txt_login: 'test@t.com', txt_pass:'123456'}};
    let res = { redirect: jest.fn() }; // mock this function

    controller.postCreateOrUpdate(req,res);

    expect(res.redirect).toHaveBeenCalledWith('index.html');
    expect(dao.create).not.toHaveBeenCalled();
    expect(dao.update).toHaveBeenCalled();
});

