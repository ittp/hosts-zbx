// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const zabbix = require("zabbix-client")
const axios = require("axios")
const dns = require("dns")

let hosts = ["5.17.2.147", "188.134.65.67"]

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;


  
  res.status(200).json({ name: 'Hello, world!' });
};
