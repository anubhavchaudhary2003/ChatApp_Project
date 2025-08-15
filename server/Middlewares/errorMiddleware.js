export const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
  });

  console.error(`Error: ${message}, Status Code: ${statusCode}`);
}   
export default errorMiddleware;