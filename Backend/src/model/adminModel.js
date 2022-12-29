const mongoose= require("mongoose")

const adminSchema= new mongoose.Schema({
    adminName:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        trim:true
    }, 
    password:{
        type: String,
        required: true,
        trim:true
    }
},{timestamps:true})


adminSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

adminSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports= mongoose.model("Admin",adminSchema)