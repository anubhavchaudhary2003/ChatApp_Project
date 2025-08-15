
import mongoose from 'mongoose';
const connection1 = async () => {
  const MongoDB_URI = process.env.MongoDB_URI ;
  const instance = await mongoose.connect(MongoDB_URI)
    console.log("Connected to MongoDB");
}
export default connection1;