import mongoose from "mongoose";

const stuSchema = new  mongoose.Schema( {
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:35},
    fees:{type:mongoose.Decimal128,required:true,validate : (v) =>{v>=5000.0}}

})


const stuModel = mongoose.model('studentCollection',stuSchema);

export default stuModel;