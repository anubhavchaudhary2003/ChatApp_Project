import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import connect1 from './DB/connection1.js';
import userRoutes from './Routes/userRoutes.js';
import errorMiddleware from './Middlewares/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import messageRoutes from './Routes/messageRoutes.js';





const app = express();
app.use(cors({
  origin: "http://localhost:5174", // Allow requests from the frontend URL
  credentials: true, // Allow cookies to be sent with requests
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization','x-custom-header'] // Allowed headers
})); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies

connect1();
const PORT = process.env.PORT||5002; 
app.use('/api/v1/user', userRoutes); 
app.use('/api/v1/message', messageRoutes); 

app.use(errorMiddleware); // Error handling middleware

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
