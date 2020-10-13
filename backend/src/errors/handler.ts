import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.log('Internal Server error');
  console.error(error);
  return response.status(500).json({
    message: 'internal server error',
    error_log: error,
  });
};

export default errorHandler;
