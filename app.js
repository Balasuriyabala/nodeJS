const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Service 1 From Github');
});
app.listen(3001);
