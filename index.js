const express = require('express');
const app = express();
const port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});