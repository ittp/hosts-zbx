import Zabbix from 'zabbix-rpc';

console.log(process.env.ZBX_API_TOKEN);
const zbx = async (request, response) => {
  console.log(request);
  const z = new Zabbix('http://188.134.65.67:8080');
  if (request.session) {
    let { username, password } = request.session;
    // base64.encode

    response = z.user.login(username, password);
  }

  // z.user.login('username', 'password');
  // let groups = await z.host.group.get({
  //   output: ['groupid', 'name'],
  //   filter: {
  //     // name: ['group1', 'Keeen'],
  //   },
  // });

  // let hosts = await z.host.get({
  //   groupids: [groups[0].groupid],
  //   output: ['hostid', 'name'],
  // });

  // let hostids = hosts.map((host) => host.hostid);

  // let items = await z.item.get({
  //   hostids: hostids,
  //   search: {
  //     name: ['Ping'],
  //   },
  //   output: ['hostid', 'lastclock', 'lastns', 'lastvalue', 'prevvalue'],
  // });

  console.log(await response);
};

const handler = async (req, res) => {
  await zbx({ request: req.body, session: { user: 'api', password: '999' } });

  res.status(200).json({
    data: [1, 2, 3],
  });
};
export default handler;
