require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 80;

// routes path
const rootRouter = require('./routes/root');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const incenseRouter = require('./routes/incense');
const standRouter = require('./routes/stand');
const orderRouter = require('./routes/order');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(
  cors(/*{
    origin: ['https://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
  }*/)
);
app.use(cookieParser());

// routes
app.use('/', rootRouter);
app.use('/auth', authRouter);
app.use('/user', userRouter);
app.use('/incense', incenseRouter);
app.use('/stand', standRouter);
app.use('/order', orderRouter);


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