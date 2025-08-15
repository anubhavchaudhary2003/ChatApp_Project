import userMessageSchema from '../Models/userMessage.js';
import userConversationSchema from '../Models/userConversation.js';
import asyncHandler from '../utilities/asyncHandler.js';
import   ErrorHandler   from '../utilities/errorHandler.js';

export const sendMessage = asyncHandler(async (req, res, next) => {
    const senderId = req.user.id;
    const receiverId = req.params.receiverId;
    const message = req.body.message;
    if (!message || !senderId || !receiverId) {
        return next(new ErrorHandler("Message content is required", 400));
    }
    let conversation = await userConversationSchema.findOne({
        participants: { $all: [senderId, receiverId] }
    });
    if (!conversation) {
        conversation = await userConversationSchema.create({
            participants: [senderId, receiverId],
            messages: [] 
        });
    }

    const newMessage = await userMessageSchema.create({
        conversation: conversation._id,
         sender:  senderId,
        receiver: receiverId,
        message: message,
        timestamp: new Date()
    });
    if (newMessage) {
        conversation.message.push(newMessage._id);
        await conversation.save();
    }

    res.status(200).json({  
        success: true,
        message: "Message sent successfully",
        responseData: {
            newMessage
        }
    });
});

export const getMessages = asyncHandler(async (req, res, next) => {
    const conversationId = req.params.conversationId;
    if (!conversationId) {
        return next(new ErrorHandler("Conversation ID is required", 400));
    }
    const messages = await userMessageSchema.find({ conversation: conversationId })
        .populate('sender', 'username avatar')
        .populate('receiver', 'username avatar')
        .sort({ timestamp: 1 });

    res.status(200).json({
        success: true,
        message: "Messages retrieved successfully",
        responseData: {
            messages
        }
    });
});



