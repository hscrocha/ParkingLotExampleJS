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

test('Read all with empty DB', async function(){
    let lstContacts = await dao.readAll();
 
    expect(lstContacts.length).toBe(0);
});

test('Create a new contact', async function(){
    let newContactData = {
        name: "John Doe",
        email: "john.doe@example.com",
        subject: "Test Subject",
        message: "Test Message"
    };

    let created = await dao.create(newContactData);

    let lst = await dao.readAll();
    expect(lst.length).toBe(1);
    expect(created._id).toBeDefined();
});
