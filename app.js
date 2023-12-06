const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Service 2 From Github');
});
app.listen(3001);
