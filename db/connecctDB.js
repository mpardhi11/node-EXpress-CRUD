import mongoose from "mongoose";


const connectDB = async() =>{
    try {
        await mongoose.connect(`${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`)
        console.log('DataBase Connecction Successful on ');

    } catch (error) {
        console.log(error);
    }
}

export {connectDB};