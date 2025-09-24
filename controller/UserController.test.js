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
    let req = { body: { txt_login: 'test@t.com', txt_pass:'123456'},
                session: {} };
    let res = { redirect: jest.fn() }; // mock res.redirect() function

    controller.postCreateOrUpdate(req,res);

    expect(res.redirect).toHaveBeenCalledWith('index.html');
    expect(dao.create).toHaveBeenCalled();
    expect(dao.update).not.toHaveBeenCalled();
});

test('Controller Update User',function(){
    let req = { body: {txt_id:"A1", txt_perm:"1", txt_login: 'test@t.com', txt_pass:'123456'},
                session: {} };
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

test('Fetch Logged User',async function(){
    let req = { session: { user: {_id:'a1',permission:1 } }};
    let res = { status: jest.fn(), //mock res.status function
                send: jest.fn(), //mock res.send()
                end: jest.fn() //mock res.end()
            }; 

    controller.loggedUser(req,res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({_id:'a1',permission:1 });
    expect(res.end).toHaveBeenCalled();
});

test('Logout User',async function(){
    let req = { session: { user: {_id:'a1',permission:1 } }};
    let res = { redirect: jest.fn(), //mock res.redirect function
            }; 

    controller.logout(req,res);

    expect(req.session.user).toBeNull(); 
    expect(res.redirect).toHaveBeenCalledWith('index.html');
});

test('Admin Security Check passess',function(){
    let req = { session: { user: {_id:'a1',permission:1 } }};
    let pass = controller.adminCheck(req);
    expect(pass).toBeTruthy();
});

test('Admin Security Check fail',function(){
    let req = { session: { user: {_id:'c1',permission:2 } }};
    let pass = controller.adminCheck(req);
    expect(pass).toBeFalsy();
});

test('Admin Security Check unlogged user',function(){
    let req = {session: {user: undefined }};
    let pass = controller.adminCheck(req);
    expect(pass).toBeFalsy();
});

test('Get All Admin',async function(){
    let req = { session: { user: {_id:'a1',permission:1 } }};
    let res = { status: jest.fn(), //mock res.status function
                send: jest.fn(), //mock res.send()
                end: jest.fn() //mock res.end()
            }; 

    await controller.getAll(req,res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalled();
    expect(dao.readAll).toHaveBeenCalled();
    expect(res.end).toHaveBeenCalled();
});

test('Get All Non-admin',async function(){
    let req = { session: {} }; // user = undefined
    let res = { status: jest.fn(), //mock res.status function
                send: jest.fn(), //mock res.send()
                end: jest.fn() //mock res.end()
            }; 

    await controller.getAll(req,res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).not.toHaveBeenCalled();
    expect(dao.readAll).not.toHaveBeenCalled();
    expect(res.end).toHaveBeenCalled();
});

test('Delete One Admin',function(){
    let req = { session: { user: {_id:'a1',permission:1 } }, 
                params:{ id:"a1a1"} }; 
    let res = { redirect: jest.fn(), //mock res.redirect function
                status: jest.fn(), //mock res.status function
                send: jest.fn(), //mock res.send()
                end: jest.fn() //mock res.end()
            }; 

    controller.deleteOne(req,res);

    expect(dao.del).toHaveBeenCalledWith("a1a1");
    expect(res.redirect).toHaveBeenCalledWith("../admin/cruduser.html");

    expect(res.status).not.toHaveBeenCalled();
    expect(res.end).not.toHaveBeenCalled();
});

test('Delete One Non-admin',function(){
    let req = { session: { }, //user = undefined
                params:{ id:"a1a1"} }; 
    let res = { redirect: jest.fn(), //mock res.redirect function
                status: jest.fn(), //mock res.status function
                send: jest.fn(), //mock res.send()
                end: jest.fn() //mock res.end()
            }; 

    controller.deleteOne(req,res);

    expect(dao.del).not.toHaveBeenCalled();
    expect(res.redirect).not.toHaveBeenCalled();

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.end).toHaveBeenCalled();
});