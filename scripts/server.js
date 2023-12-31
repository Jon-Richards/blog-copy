const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.resolve('doc', 'public')));
app.listen(port, () => console.log(`Listening on ${port}.`));
