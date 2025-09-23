const controller = require("./UserController");
const dao = require("../model/UserDao");
const passUtil = require("../util/PasswordUtil");

// Tell Jest to mock the whole module
jest.mock('../model/UserDao');
jest.mock('../util/PasswordUtil');

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

test('Controller Successful Login',async function(){
    let req = { body: { txt_login: 'test@t.com', txt_pass:'123456'},
                session: { user: null }};
    let res = { redirect: jest.fn() }; // mock res.redirect() function
    dao.findLogin = jest.fn( async() => ({login:'test@t.com', password:'hashed'}) );
    passUtil.comparePassword = jest.fn( () => true );

    await controller.login(req,res);

    expect(dao.findLogin).toHaveBeenCalled();
    expect(passUtil.comparePassword).toHaveBeenCalledWith('123456','hashed');
    expect(req.session.user).not.toBeNull();
    expect(res.redirect).toHaveBeenCalledWith("index.html");
});

test('Controller Login with Wrong Password',async function(){
    let req = { body: { txt_login: 'test@t.com', txt_pass:'123456'},
                session: { user: null }};
    let res = { redirect: jest.fn() }; // mock res.redirect() function
    dao.findLogin = jest.fn( async() => ({login:'test@t.com', password:'hashed'}) );
    passUtil.comparePassword = jest.fn( () => false );

    await controller.login(req,res);

    expect(dao.findLogin).toHaveBeenCalled();
    expect(passUtil.comparePassword).toHaveBeenCalledWith('123456','hashed');
    expect(req.session.user).toBeNull();
    expect(res.redirect).toHaveBeenCalledWith("login.html?error=1");
});

test('Controller Incorrect Login',async function(){
    let req = { body: { txt_login: 'test@t.com', txt_pass:'123456'},
                session: { user: null }};
    let res = { redirect: jest.fn() }; // mock res.redirect() function
    dao.findLogin = jest.fn( async() => null ); // mock findLogin to return null 

    await controller.login(req,res);

    expect(dao.findLogin).toHaveBeenCalled();
    expect(passUtil.comparePassword).not.toHaveBeenCalled();
    expect(req.session.user).toBeNull();
    expect(res.redirect).toHaveBeenCalledWith("login.html?error=1");
});


