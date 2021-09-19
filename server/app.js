require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(
  cors(/*{
    origin: ['https://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
  }*/)
);
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('WELCOME! CLOUDI SERVER!')
})



let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(PORT, () => console.log(`https server runnning on ${PORT} port`));
} else {
  server = app.listen(PORT, () => console.log(`http server runnning on ${PORT} port`));
}
module.exports = server;