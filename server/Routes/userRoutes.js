import express from 'express';
import { getProfile, loginUser, logoutUser, getotherUsers } from '../Controllers/userController.js';
import { registerUser } from '../Controllers/userController.js';
import { isAuthenticated } from '../Middlewares/authMiddleware.js';

const Router = express.Router();


 
Router.post('/login', loginUser);
Router.post('/register', registerUser);
Router.get('/get-profile', isAuthenticated ,getProfile)
Router.post('/logout', isAuthenticated, logoutUser); 
Router.get('/get-other-users', isAuthenticated, getotherUsers);
export default Router;

