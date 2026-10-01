const controller = require('./ContactController');
const dao = require('../model/ContactDao');

jest.mock('../model/ContactDao');

beforeEach(function(){
    jest.clearAllMocks();
});

test('getAll should call dao.readAll and send the result', async function(){
    let req = {};
    let res = {};
    res.status = jest.fn();
    res.send = jest.fn();
    res.end = jest.fn();

    await controller.getAll(req,res);

    expect(dao.readAll).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalled();
    expect(res.end).toHaveBeenCalled(); 
});

test('postCreate should succeed', async function(){
    let req= { body: {
        txt_name: 'John Doe',
        txt_email: 'john.doe@example.com',
        txt_message: 'Hello, this is a test message.',
        txt_subject: 'Test Subject'
    }  } ;
    let res = {};
    res.status = jest.fn();
    res.redirect = jest.fn();
    dao.create = jest.fn(() => { return { _id: '123' }; });

    await controller.postCreate(req,res);

    expect(dao.create).toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith('/index.html');
    expect(res.status).not.toHaveBeenCalledWith(400);
});

test('postCreate should not succeed', async function(){
    let req= { body: {
        txt_name: 'John Doe',
        txt_email: 'john.doe@example.com',
        txt_message: 'Hello, this is a test message.',
        txt_subject: 'Test Subject'
    }  } ;
    let res = {};
    res.status = jest.fn();
    res.redirect = jest.fn();
    dao.create = jest.fn(() => { return { _id: null }; });

    await controller.postCreate(req,res);

    expect(dao.create).toHaveBeenCalled();
    expect(res.redirect).not.toHaveBeenCalledWith('/index.html');
    expect(res.status).toHaveBeenCalledWith(400);
});