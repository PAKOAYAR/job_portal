
import mongoose from "mongoose";
const jobSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        unique:true
    },
    requirement:{
        type:String,
        
    },
    salary:{
        type:Number,
        unique:true
    },
    location:{
        type:String,
        require:true
    },
    jobType:{
        type:String,
        unique:true
    },
    position:{
        type:Number,
        require:true
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Company',
        require:true
    },
    created_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    },
    application:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Application',
        }
    ]
},{timestamps:true});
export const job=mongoose.model("Job",jobSchema)