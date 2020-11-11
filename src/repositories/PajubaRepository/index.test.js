const PajubaRepository = require('./index');

test('expect to get a list of pajubas', async () => {
  const data = await PajubaRepository.index();  
  expect(data).not.toBe(null);
  expect(data.total).not.toBe(null);
  expect(data.pajubas).not.toBe(null);  
  expect(data.pajubas.length).toBeGreaterThanOrEqual(0);
});

test('expect to get a random pajuba', async () => {
  const data = await PajubaRepository.getRandom();
  expect(data).not.toBe(null);
  expect(data.title).not.toBe(null);
  expect(data.title.length).toBeGreaterThanOrEqual(0);
});

test('expect to get a daily pajuba', async () => {
  const data = await PajubaRepository.dailyPajuba();
  expect(data).not.toBe(null);
  expect(data.title).not.toBe(null);
  expect(data.title.length).toBeGreaterThanOrEqual(0);
});

test('expect to get 3 available random pajuba expressions', async () => {
  const data = await PajubaRepository.getAvailableExpressions();
  expect(data.length).toBe(3);
});

test('expect to get total of pajubas', async () => {
  const data = await PajubaRepository.getTotalCount();
  expect(data).toBeGreaterThanOrEqual(0);
});

test('expect find pajuba by title', async () => {
  const data = await PajubaRepository.getOne('aqué');
  expect(data.title).toBe('aqué')
});

test('expect to create a pajuba', async () => {
  const data = await PajubaRepository.store('test', 'insert test');
  expect(data).not.toBe(null);
  expect(data.title).toBe('test');
});

test('expect to update a pajuba', async () => {
  let pajubaToUpdate = await PajubaRepository.getOne('test');

  pajubaToUpdate.description="insert new test";

  const data = await PajubaRepository.update(pajubaToUpdate);

  expect(data).not.toBe(null);
  expect(data.title).toBe('test');
  expect(data.description).toBe('insert new test');
});

test('expect to remove a pajuba', async () => {
  const pajubaToRemove = await PajubaRepository.getOne('test');
  const data = await PajubaRepository.remove(pajubaToRemove);
  expect(data).not.toBe(null);
  expect(data.title).toBe('test');
});