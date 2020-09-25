const path = require('path');
const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const cors = require('cors');
const bodyParser = require('body-parser');

const globalErrorHandler = require('./controllers/errorController');
const messageRouter = require('./routes/messageRoutes');

const app = express();
app.use(bodyParser.json())

// app.use(function(req, res, next) {
//     if (req.secure) {
//       next();
//     } else {
//       res.redirect(`https://${req.headers.host}${req.url}`);
//     }
//   });

app.enable('trust proxy');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());

app.options('*', cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use(helmet());

const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour!'
  });
app.use('/api', limiter);

app.use(mongoSanitize());
// Data sanitization againt XSS
app.use(xss());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
  });

app.use('/api/messages', messageRouter);


// app.all('*', (req, res, next) => {
//     res.status(404).render('error-page', {
//       title: '404',
//       page: 'Page Not Found',
//       image: 'not-found',
//       errorMessage: 'Page Not Found'
//     });
//     // next(new AppError(`Page ${req.originalUrl} not found!`, 404));
//   });

app.use(globalErrorHandler);

module.exports = app;