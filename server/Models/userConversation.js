import mongoose, { mongo } from 'mongoose';
const userConversationSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    required: true
    }
});
const UserMessage = mongoose.model('UserMessage', userMessageSchema);

export default UserMessage;

