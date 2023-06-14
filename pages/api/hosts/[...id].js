// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const zabbix = require('zabbix-client');
const axios = require('axios');
const dns = require('dns');

let h = [{ host: 'IZ', uuid: 'uuid' }, { host: 'WH' }];

console.log(dns);

let getHost = (id) => {
  axios.get('http://188.134.65.67:8080');
};
// Object.keys(req.query)
const handler = async (req, res) => {
  res.status(200).json([]);
};

export default handler;
