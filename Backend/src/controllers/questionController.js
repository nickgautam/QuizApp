const mongoose = require('mongoose')
const questionModel = require('../model/questionModel')

exports.createQuestion = async (req, res) => {
    try {
        let data = req.body
        const { description, options, image } = data

        const question = await questionModel.create(data)

        return res.status(201).send({ status: true, msg: "Question Succesfully uploaded", data: question })
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}


exports.getAllQuestions = async (req, res) => {
    try {
        const questions = await questionModel.find()
        return res.status(200).send({ status: true, message: "All Questions List", data: questions })
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }

}

exports.getSingleQuestion = async (req, res) => {
    try {
        const _id = req.params.id

        const question = await questionModel.findById(_id)
        if (!question) return res.status(404).send({ status: false, message: "Question not found" })

        else return res.status(200).send({ status: true, message: "Question", data: question })

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }

}

exports.updateQuestions = async (req, res) => {
    try {
        const _id = req.params.id
        let data = req.body
        const { description, options } = data

        const question = await questionModel.findById(_id)

        if (!question) return res.status(404).send({ status: false, message: "Question not found" })

        question.description = description
        question.options = options
        const updateData = await questionModel.findOneAndUpdate({ _id: _id }, question, { new: true })
        return res.status(200).send({ status: true, message: "Question successfully updated", data: updateData })

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}

exports.deleteQuestion = async (req, res) => {
    try {
        const _id = req.params.id

        const question = await questionModel.findOne({ _id: _id, isDeleted: false })

        if (question.isDeleted == "true") return res.status(404).send({ status: false, message: "Question already deleted" })
        
        await questionModel.findOneAndUpdate({ _id: _id }, { $set: { isDeleted: true } }, { new: true })

        return res.status(200).send({ status: true, message: "Question successfully deleted" })

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}




