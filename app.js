'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const express = require('express');
const es6Renderer = require('express-es6-template-engine');
const morgan = require('morgan');
const logger = morgan('tiny');
const helmet = require('helmet');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept"
  };
  
app.use(cors(corsOptions));
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(express.static('public'));
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
app.use(logger);
app.use(
    helmet({
        contentSecurityPolicy: false,
    })
);

app.use(cookieParser());
app.use(
    session({
        secret: 'mySecret',
        resave: false,
        saveUninitialized: true,
        is_logged_in: false,
    })
);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
const rootController = require('./routes/index');
const dogController = require('./routes/dog');

app.use('/dog-profile', dogController);
app.use('/', rootController)

