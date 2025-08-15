import express from 'express';
import  asyncHandler  from '../utilities/asyncHandler.js';
import  ErrorHandler  from '../utilities/errorHandler.js';
import User from '../Models/userModel.js';
import becrypt, { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';




export const registerUser = asyncHandler(async(req, res,next) => {
    const { fullName, username, password } = req.body;
    console.log("Registering user with username:", username);
    if (!fullName || !username || !password) {
        return next(new ErrorHandler("All fields are required", 400));
    }
const user = await User.findOne({ username });
if (user) {
    return next(new ErrorHandler("User already exists", 400));
}
const hashedPassword = await becrypt.hash(password, 10);
const avatar = `https://api.dicebear.com/6.x/initials/svg?seed=${username}`;


const newUser = await User.create({
    fullName,   
    username,
    password: hashedPassword,
    avatar, 
});
const tokenData = {
        id: user._id,
    }
    const tokenSecret = process.env.JWT_SECRET
    const timeOut = process.env.JWT_TIMEOUT || "1d" ; // Default to 24 hours if not set
    const token = jwt.sign(tokenData, tokenSecret, {
        expiresIn: "1d",
    });
res
.status(200)
.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    sameSite: 'strict', // Prevent CSRF attacks
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
})
.json({
    success: true,
    message: "User registered successfully",
    responseData: {
        newUser,
        token
    },
});

});

export const loginUser = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;  
    console.log("Login attempt with username:", username);
    if (!username || !password) {
        return next(new ErrorHandler("Username and password are required", 400));
    }
    const user = await User.findOne({ username });
    if (!user) {
        return next(new ErrorHandler("Invalid username or password", 401));
    }
    const isPasswordValid = await becrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return next(new ErrorHandler("Invalid username or password", 401));
    }
    const tokenData = {
        id: user._id,
    }
    const tokenSecret = process.env.JWT_SECRET
    const timeOut = process.env.JWT_TIMEOUT || "1d" ; // Default to 24 hours if not set
    const token = jwt.sign(tokenData, tokenSecret, {
        expiresIn: "1d",
    });

res
.status(200)
.cookie('token', token, {
    httpOnly: true,
    expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
    sameSite: 'strict', // Prevent CSRF attacks
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
})
.json({
    success: true,
    message: "User logged in successfully",
    responseData: {
        user,
        token
    },
});




    
});

export const getProfile = asyncHandler(async(req, res,next) => {
    const userId = req.user.id;
    const user = await User.findById(userId)
    res.status(200).json({
        success: true,
        message: "User profile fetched successfully",
        responseData: user,
    });

});
export const logoutUser = asyncHandler(async(req, res,next) => {
    res
    .status(200)
    .cookie('token', null, {
        httpOnly: true,
        expires: new Date(Date.now()),
        sameSite: 'strict', // Prevent CSRF attacks
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    })
    .json({
        success: true,
        message: "User logged out successfully",
    });
})
export const getotherUsers = asyncHandler(async(req, res,next) => {
    const userId = req.user.id;
    const users = await User.find({ _id: { $ne: userId } });
    res.status(200).json({
        success: true,
        message: "Other users fetched successfully",
        responseData: users,
    });
})

