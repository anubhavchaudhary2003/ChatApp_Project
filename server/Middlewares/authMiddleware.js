import cookieParser from 'cookie-parser';
import {asyncHandler} from  '../utilities/asyncHandler.js';
import jwt from 'jsonwebtoken';
import User from '../Models/userModel.js';
import { ErrorHandler } from '../utilities/errorHandler.js';


export const isAuthenticated = asyncHandler(async(req, res,next) => {
    const token = req.cookies.token;
    if(!token){
        return next(new ErrorHandler("No token provided, please login first", 401));

    }
    const tokenData = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(tokenData.id);
    next();
});