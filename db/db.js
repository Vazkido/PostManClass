import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "notemaker"
        });
        console.log("Pinged your deployment. You successfully connected")
    }catch (err) {
        console.error(err);
    }  
}
export default connectDB