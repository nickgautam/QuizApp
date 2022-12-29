const mongoose = require('mongoose')
const adminModel = require('../model/adminModel')

exports.createAdmin = async (req, res) => {
    try {
        let data = req.body
        const { adminName, email, password } = data

        const adminDetail = await adminModel.create(data)

        return res.status(201).send({ status: true, msg: "Question Succesfully uploaded", data: adminDetail })
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.message })
    }
}