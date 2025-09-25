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
//afterEach(function(){});

test('Read All Empty DB',async function(){
    let lstContacts = await dao.readAll();

    expect(lstContacts.length).toBe(0);
});

test('Create new Contact',async function(){
    let data = {name:'Jhonny test',email:'jtest@t.com',subject:'Testing',
        message:'test test test test test ...'
    };

    let contact = await dao.create(data);
    // Also find it 

    expect(contact._id).toBeDefined();
});

test('ReadAll with Data', async function(){
    let data1 = {name:'test1',email:'t1@t.com',subject:'Testing',
        message:'test test test test test ...'
    };
    let data2 = {name:'test2',email:'t2@t.com',subject:'Testing',
        message:'test test test test test ...'
    };
    let data3 = {name:'test3',email:'t3@t.com',subject:'Testing',
        message:'test test test test test ...'
    };

    await dao.create(data1);
    await dao.create(data2);
    await dao.create(data3);

    let lstContacts = await dao.readAll();
    
    expect(lstContacts.length).toBe(3);
});
