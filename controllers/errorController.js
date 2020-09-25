const AppError = require('./../utils/appError');

const handleCastErrorDB = err => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  console.log(value);
  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  const message = `Invalid input data. ${errors.join(' . ')}`;
  return new AppError(message, 400);
};

const handleJWTError = () =>
  new AppError('Invalid token. Please log in again!', 401);

const handleJWTExpiredError = () =>
  new AppError('Your token has expired! Please log in again.', 401);

const sendErrorDev = (err, req, res) => {
  // API
  if (req.originalUrl.startsWith('/api')) {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      errorMessage: err.message,
      stack: err.stack
    });
  } else {
    // RENDERED
    console.log(err);

    res.status(err.statusCode).render('error-page', {
      title: 'Something went wrong!',
      errorMessage: err.message,
      error: err,
      image: 'empty'
    });
  }
};

const sendErrorProd = (err, req, res) => {
  // A) API
  if (req.originalUrl.startsWith('/api')) {
    // Operational, trusted error: send message to client
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        errorMessage: err.message
      });

      // Programming or other unknown error: don't leak error details
    }
    // 1) Log error
    console.error('Error', err);

    // 2) Send generic message
    return res.status(500).json({
      status: 'error',
      errorMessage: 'Something went wrong!',
      image: 'empty'
    });
  }
  // B) RENDERED WEBSITE
  if (err.isOperational) {
    console.log(err);
    return res.status(err.statusCode).render('error-page', {
      title: 'Something went wrong!',
      errorMessage: err.message,
      image: 'empty'
    });

    // B) Programming or other unknown error: don't leak error details
  }
  // 1) Log error
  console.error('Error', err);

  // 2) Send generic message
  return res.status(err.statusCode).render('error-page', {
    title: 'Something went wrong!',
    errorMessage: 'An error Occured! Please try again later.',
    image: 'empty'
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };

    error.message = err.message;

    if (error.name === 'CastError') error = handleCastErrorDB(error);
    if (err.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'validationError')
      error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();

    sendErrorProd(error, req, res);
  }
};
