const mongoose =require('mongoose')
const questionModel =require('../model/questionModel')

exports.createQuestion= async (req, res) => {
    try {
        let data=req.body
        const { description,options,image} = data
        
        const question = await questionModel.create(data)

        return res.status(201).send({status:true,message:"Question Succesfully uploaded",data:question})
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}
