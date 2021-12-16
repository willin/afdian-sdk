# afdian - 爱发电 SDK for Node.js & Browser

[![github](https://img.shields.io/github/followers/willin.svg?style=social&label=Followers)](https://github.com/willin) [![npm](https://img.shields.io/npm/v/afdian-sdk.svg)](https://npmjs.org/package/afdian-sdk) [![npm](https://img.shields.io/npm/dm/afdian-sdk.svg)](https://npmjs.org/package/afdian-sdk) [![npm](https://img.shields.io/npm/dt/afdian-sdk.svg)](https://npmjs.org/package/v0) [![Build Status](https://app.travis-ci.com/willin/afdian-sdk.svg?branch=main)](https://app.travis-ci.com/willin/afdian-sdk) [![Maintainability](https://api.codeclimate.com/v1/badges/4d4df3c3ea84e22fb7dc/maintainability)](https://codeclimate.com/github/willin/afdian-sdk/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4d4df3c3ea84e22fb7dc/test_coverage)](https://codeclimate.com/github/willin/afdian-sdk/test_coverage)

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
