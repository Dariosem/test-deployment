const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/test-deployment'));

app.get('/*',(req, resp) => {
  resp.sendFile('index.html', {root: 'dist/test-deployment'});
})

app.listen(process.env.PORT || 8080);
