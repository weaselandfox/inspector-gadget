const express = require("express");
const cors = require("cors");

const logger = require("./lib/logger");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.all("*", cors(), (req, res) => {
  const { headers, body, connection, method } = req;

  const data = {
    method,
    headers,
    body,
    remoteAddress: connection.remoteAddress,
  };

  logger.log(data);

  res.send(data);
});

app.listen(port, () => logger.log(`App listening at http://localhost:${port}`));
