const dbcon = require('./DbConnection');
const dao = require('./ContactDao');

beforeAll(function(){
    dbcon.connect("test");
});
afterAll(async function(){
    await dao.deleteAll();
    dbcon.disconnect();
});
beforeEach(async function(){
    await dao.deleteAll();
});
//afterEach();

test('ReadAll on a empty DB',async function(){
    let lst = await dao.readAll();

    expect(lst.length).toBe(0);
});

test('Create and ReadAll',async function(){
    const data = {
        name: "Test Name",
        email: "test@example.com",
        subject: "Test Subject",
        message: "Test Message"
    };

    let created = await dao.create(data);
    let lst = await dao.readAll();

    expect(created._id).toBeDefined();
    expect(lst.length).toBe(1);
 });