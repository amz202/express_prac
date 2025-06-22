import mongoose from "mongoose";

const MONGO_PW = process.env.MONGO_PW

export const connectDB = async () => {
    const mongo_uri = `mongodb+srv://abdulmajidzeeshan4:${MONGO_PW}@cluster0.3spdwnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

    await mongoose.connect(mongo_uri).then(()=>{
        console.log("Connected to MongoDB")
    })
}