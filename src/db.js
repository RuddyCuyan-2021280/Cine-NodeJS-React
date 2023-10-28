import mongoose from "mongoose";

export const connectDB = async() => {
    
    try {
        
        await mongoose.connect('mongodb://127.0.0.1:27017/Cine')
        console.log('>>>DB is conected');

    } catch (error) {

        console.error(error);

    }
}