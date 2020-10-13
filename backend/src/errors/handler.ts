import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.error(error);
  return res.status(500).json({
    message: 'internal server error',
    // error_log: error,
  });
};

export default errorHandler;
