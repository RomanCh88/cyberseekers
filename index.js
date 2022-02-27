const { dos } = require("./controllers/ddos.js");

dos("http://localhost:3000", 150, 500);
