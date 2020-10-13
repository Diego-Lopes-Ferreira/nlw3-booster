import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    console.log('Validation error');

    let errors: ValidationErrors = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });

    return response.status(400).json({
      message: 'Validation error',
      errors,
    });
  }
  console.log('Internal Server error');
  console.error(error);

  return response.status(500).json({
    message: 'internal server error',
    error_log: error,
  });
};

export default errorHandler;
