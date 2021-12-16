import Afdian from '../src';

const afdian = new Afdian({
  userId: process.env.AFDIAN_USER_ID || '',
  token: process.env.AFDIAN_TOKEN || ''
});

test('Ping', async () => {
  const res = await afdian.ping();
  expect(res.ec).toBe(200);
  expect(res.em).toBe('pong');
});

test('queryOrder', async () => {
  const res = await afdian.queryOrder(1);
  expect(res.ec).toBe(200);
  expect(res.data.total_count).toBeGreaterThanOrEqual(0);
});

test('querySponsor', async () => {
  const res = await afdian.querySponsor(1);
  expect(res.ec).toBe(200);
  expect(res.data.total_count).toBeGreaterThanOrEqual(0);
});
