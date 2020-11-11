const UserRepository = require('./index');
const faker =require('faker/locale/pt_BR');

test('expect to create a user', async () => {
  const data = await UserRepository.store({userId: faker.random.alphaNumeric(25), name: faker.name.findName()});
  expect(data).not.toBe(null);
  expect(data.userId).not.toBe(null);
  expect(data.name).not.toBe(null);  
});

test('expect to not create a duplicate user', async () => {
  const user = {userId: faker.random.alphaNumeric(25), name: faker.name.findName()};
  await UserRepository.store(user);
  const data = await UserRepository.store(user);
  expect(data).not.toBe(null);
  expect(data.error).not.toBe(null);   
});

test('expect to get a list of users', async () => {
  const data = await UserRepository.index();
  expect(data.total).not.toBe(null);
  expect(data.users).not.toBe(null);  
  expect(data.users.length).toBeGreaterThanOrEqual(0);
});

test('expect to get one user', async () => {
  const user = {userId: faker.random.alphaNumeric(25), name: faker.name.findName()};
  const created = await UserRepository.store(user);

  const data = await UserRepository.getOne(created.userId);
  expect(data).not.toBe(null);
  expect(data.userId).not.toBe(null);
  expect(data.userId).toBe(user.userId);
  expect(data.name).not.toBe(null); 
  expect(data.name).toBe(user.name);  
});

test('expect to update one user', async () => {
  const user = {userId: faker.random.alphaNumeric(25), name: faker.name.findName()};
  const created = await UserRepository.store(user);
  expect(created).not.toBe(null);
  expect(created.userId).not.toBe(null);
  expect(created.userId).toBe(user.userId);
  expect(created.name).not.toBe(null); 
  expect(created.name).toBe(user.name); 

  let found = await UserRepository.getOne(created.userId);
  found.name="Felipe Ferreira";

  const data = await UserRepository.update(found);    

  expect(data).not.toBe(null);
  expect(data.userId).not.toBe(null);
  expect(data.userId).toBe(user.userId);
  expect(data.name).not.toBe(null); 
  expect(data.name).toBe('Felipe Ferreira');  
});

test('expect to delete one user', async () => {
  const user = {userId: faker.random.alphaNumeric(25), name: faker.name.findName()};
  const created = await UserRepository.store(user);
  expect(created).not.toBe(null);
  expect(created.userId).not.toBe(null);
  expect(created.userId).toBe(user.userId);
  expect(created.name).not.toBe(null); 
  expect(created.name).toBe(user.name);   

  const data = await UserRepository.remove(created);    

  expect(data).not.toBe(null);
  expect(data.userId).not.toBe(null);
  expect(data.userId).toBe(created.userId);
  expect(data.name).not.toBe(null); 
  expect(data.name).toBe(created.name);  
});