// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const zabbix = require('zabbix-client');
const axios = require('axios');
const dns = require('dns');


let h = [{ host: 'IZ', uuid: 'uuid' }, { host: 'WH' }];
const handler = async (req, res) => {
  res.status(200).json({ name: 'Hello, world!', hosts: [{ host: 'IZ' }] });
};

export default handler;
