import axios from 'axios';
import tunnel from 'tunnel'
import fs from 'fs';

// const instance = axios.create({
//   proxy: {
//     host: '127.0.0.1',
//     port: 7890,
//   },
// });

// instance.get('https://dreamacro.github.io/clash/logo.png').then(res => {
//   const data = res.data
//   writeFileSync('./logo.txt', data)
// }).catch(err => {

//   writeFileSync('./error.txt', JSON.stringify(err))
// })
// 代理设置
// https://janmolak.com/node-js-axios-behind-corporate-proxies-8b17a6f31f9d
const agent = tunnel.httpsOverHttp({
  proxy: {
    host: '127.0.0.1',
    port: 7890,
  }
});

axios.request({
  url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
  method: 'get',
  httpsAgent: agent,
  proxy: false, // 设置axios不要自动检测命令行代理设置
  responseType: 'stream' // blob
}).then(res => {
  // res.
  const { data, headers } = res
  const dir = './'
  const fileName = 'googlelogo_color_92x30dp.png'
  console.log(headers['Content-Type'])
  // console.log(res)
  // const blob = new Blob([data], headers['Content-Type'])

  // const buf = Buffer.from(data)

  // fs.writeFileSync('./' + fileName, data, {
  //   encoding: 'binary'
  // })
  // https://github.com/axios/axios#axios-api
  data.pipe(fs.createWriteStream(dir + fileName))
}).catch (err => {
  console.error('error', err.toString())
})