import mongoose from "mongoose";

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => console.log('Database Connected'))

        await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`)
    } catch (error) {
        console.log('DB connection Failed!: ', error)
    }

}

export default connectDB