// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const zabbix = require("zabbix-client")
const axios = require("axios")
const dns = require("dns")

let hosts = ["5.17.2.147", "188.134.65.67", "194.67.109.159"]

let auth = async (host, user, password) => {
  console.log(host)
  if(host) {
    console.info(host)
  }

  let headers = await axios.get(host + "/auth").then(r => r.headers)
  //.then(response)


  let data = {

  }

  //axios.post({
  //  url: host, data: { user, password }
  // })
}

export default (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;


  if(req.headers["Authorization"]) {
      console.log( "Authorization", req.headers["Authorization"])
}

let q = req.query              
var gsjson = require('google-spreadsheet-to-json');

gsjson({
    spreadsheetId: 'abc123456789',
    // other options...
})
.then(function(result) {
    console.log(result.length);
    console.log(result);
})
.catch(function(err) {
    console.log(err.message);
    console.log(err.stack);
});


if(req.query.sid) {

  GNU nano 6.2                                            
  var gsjson = require('google-spreadsheet-to-json');
  
  gsjson({
    GNU nano 6.2                     gs.js                               
    var gsjson = require('google-spreadsheet-to-json');
    
    gsjson({
        spreadsheetId: 'abc123456789',
        // other options...
    })
    .then(function(result) {
        console.log(result.length);
        console.log(result);
    })
    .catch(function(err) {
        console.log(err.message);
        console.log(err.stack);
    });
    : 'abc123456789',
      // other options...
  })
  .then(function(result) {
      console.log(result.length);
      console.log(result);
  })
  .catch(function(err) {
      console.log(err.message);
      console.log(err.stack);
  });
  
}

  res.status(200).json({ name: 'Hello, world!', hosts });
};
