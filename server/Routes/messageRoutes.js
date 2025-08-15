import express from 'express';
import { getProfile, loginUser, logoutUser } from '../Controllers/userController.js';
import { registerUser } from '../Controllers/userController.js';
import { isAuthenticated } from '../Middlewares/authMiddleware.js';
import { sendMessage } from '../Controllers/messageController.js';
import { getMessages } from '../Controllers/messageController.js';
const Router = express.Router();

Router.post('/send-message/receiverId', isAuthenticated, sendMessage);
Router.get('/get-messages/:conversationId', isAuthenticated, getMessages); 
export default Router;
