import stuModel from "../model/student-Schema.js";

class studentController {
    static getAllDoc = async(req,res) =>{
        try {
            const result = await stuModel.find();
            res.render('index.ejs',{data :result});

        } catch (error) {
            console.log(error);
        }
    }

    static createDoc = async(req,res) =>{
        try {
           const {name,age,fees} = req.body;
           let newDoc = new stuModel({
               name,age,fees
           }) 
           let result = await newDoc.save();
             res.redirect('/student/');
        } catch (error) {
            console.log(error);
        }
    }


    static editDoc = async(req,res) =>{
        try {
            let result = await stuModel.findById(req.params.id);
            res.render('edit.ejs',{data:result})
        } catch (error) {
            console.log(error);
        }
    }

    static updateDocById = async(req,res) =>{
        try {
            let result = await stuModel.findByIdAndUpdate(req.params.id,req.body);
            // console.log(req.body);
        } catch (error) {
            console.log(error);
        }
        res.redirect('/student/');
    }

    static deleteDocById = async(req,res) =>{
        try {
            // console.log(req.params.id);
            let result = await stuModel.findByIdAndDelete(req.params.id);
             res.redirect('/student/');
        } catch (error) {
            console.log(error);
        }
    }

}


export  {studentController};