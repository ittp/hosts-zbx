const { joinObjects } = require('../utils/joinObjects');

var routers = [
  { id: 1, key: 'iz', name: 'iz-spb.keenetic.pro' },
  { id: 2, key: 'wh', name: 'wh-spb.keenetic.pro' },
  { id: 3, key: 'gw', name: 'gw-spb.keenetic.pro' },
  { id: 4, key: 'vz', name: 'gw-spb.keenetic.pro' },
];

var template = [
  {
    id: 1,
    template: 'ICMP Ping',
    groups: ['Keenetic'],
    interfaces: [],
  },
  {
    id: 2,
    template: 'ICMP Ping',
    groups: ['Keenetic'],
    interfaces: [
      {
        name: '',
      },
    ],
  },
  {
    id: 3,
    template: 'ICMP Ping',
    groups: ['Keenetic'],
    interfaces: [
      {
        name: '',
      },
    ],
  },
];

const handler = async (req, res) => {
  // let assigned = Object.assign(host, req.body);

  var responseData = joinObjects(routers, template);

  console.log(JSON.stringify(responseData));

  res.status(200).json({ responseData });
};

export default handler;
