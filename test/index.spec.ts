import { Afdian } from '../src';

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

test('webhookOrder', async () => {
  const testData = {
    ec: 200,
    em: 'ok',
    data: {
      type: 'order',
      order: {
        out_trade_no: '202106232138371083454010626',
        user_id: 'adf397fe8374811eaacee52540025c377',
        plan_id: 'a45353328af911eb973052540025c377',
        month: 1,
        total_amount: '5.00',
        show_amount: '5.00',
        status: 2,
        remark: '',
        redeem_id: '',
        product_type: 0,
        discount: '0.00',
        sku_detail: [],
        address_person: '',
        address_phone: '',
        address_address: ''
      }
    }
  };
  const res = await afdian.webhookOrder(testData);
  expect(res.ec).toBe(200);
  expect(res.data.type).toBe('order');
  expect(res.data.order.out_trade_no).toBe('202106232138371083454010626');
});
