const express = require('express');

const logger = require('./lib/logger');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.all('*', (req, res) => {
  const { headers, body, connection } = req;

  res.send({
    headers,
    body,
    remoteAddress: connection.remoteAddress,
  });
});

app.listen(port, () => logger.log(`App listening at http://localhost:${port}`));
