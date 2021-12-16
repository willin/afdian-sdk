# afdian - 爱发电 SDK for Node.js & Browser

[![GitHub followers](https://img.shields.io/github/followers/willin?logo=github&style=flat-square&label=)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/afdian?style=flat-square&logo=npm)](https://npmjs.org/package/afdian) [![npm](https://img.shields.io/npm/dm/afdian?style=flat-square&label=down)](https://npmjs.org/package/afdian) [![npm](https://img.shields.io/npm/dt/afdian?style=flat-square&label=down)](https://npmjs.org/package/v0) [![Travis (.com)](https://img.shields.io/travis/com/willin/afdian-sdk?style=flat-square&logo=travis&label=ci)](https://app.travis-ci.com/willin/afdian-sdk) [![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/willin/afdian-sdk?style=flat-square&logo=codeclimate&label=rank)](https://codeclimate.com/github/willin/afdian-sdk/maintainability) [![Code Climate coverage](https://img.shields.io/codeclimate/coverage/willin/afdian-sdk?style=flat-square&label=cov)](https://codeclimate.com/github/willin/afdian-sdk/test_coverage)

## 使用 Usage

### 安装 Install

```bash
yarn add afdian
# or
npm install --save afdian
```

### 引入 Import

```js
import Afdian, { AfdianClientOptions, AfdianSponsorResponse, AfdianOrderResponse } from 'afdian';
// 其中 { } 中 ts 类型可以不导入
// Types in { } block can be ignored

const afdian = new Afdian({
  userId: 'xxxx',
  token: 'xxxx'
});
// Ref: https://afdian.net/dashboard/dev

const res = await afdian.ping();
// {
//   ec: 200,
//   em: 'pong',
//   data: { }
// }

// 查询订单
const res = await afdian.queryOrder(1);
// {
//   ec: 200,
//   em: 'order',
//   data: {
//     list: [],
//     total_count: 0,
//     total_page: 0
//   }
// }

// 查询赞助者
const res = await afdian.querySponsor(1);
// {
//   ec: 200,
//   em: 'sponsor',
//   data: {
//     list: [],
//     total_count: 0,
//     total_page: 0
//   }
// }
```

## License

Apache 2.0

捐赠 / Donate: <https://afdian.net/@willin>
