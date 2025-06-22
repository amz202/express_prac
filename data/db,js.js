import mongoose from "mongoose";

export const connectDB = async () => {
    const mongo_uri = "mongodb+srv://abdulmajidzeeshan4:fmJU2xBvwJcF5FHx@cluster0.3spdwnn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    await mongoose.connect(mongo_uri).then(()=>{
        console.log("Connected to MongoDB")
    })
}