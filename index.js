const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json());

app.post('/', (req, res) => {
  console.log('-----START REQUEST-----');
  console.log('HEADERS', JSON.stringify(req.headers));
  console.log('BODY', JSON.stringify(req.body));
  console.log('-----END-----');
  res.send('received content')
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
