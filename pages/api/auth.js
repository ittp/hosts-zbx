let authData = {
  jsonrpc: '2.0',
  method: 'user.login',
  params: {
    user: 'api',
    password: 'gYU-q7Q-fYg-PEV',
  },
  id: 1,
  auth: null,
};
let authorize = axios
  .get({
    url: 'http://188.134.65.67:8080/',
    headers: {
      'Content-Type': 'application/json-rpc',
    },
    cors: true,
    data: authData,
  })
  .then((response) => response)
  .catch((e) => console.error(e))
  .then((data) => console.log(data));

const handler = async (req, res) => {
  // let assigned = Object.assign(host, req.body);
  res.status(200).json({ auth: [] });
};

export default handler;
