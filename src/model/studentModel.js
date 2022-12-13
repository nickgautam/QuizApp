const mongoose= require("mongoose")

const studentSchema= new mongoose.Schema({
    studentName:{
        type: String,
        required: true,
        trim:true
    },
    contact:{
        type: Number,
        required: true,
        trim:true
    }, 
    email:{
        type: String,
        required: true,
        unique: true,
        trim:true
    }, 
    password:{
        type: String,
        required: true,
        trim:true
    }, 
    rollNo:{
        type: Number,
        required: true,
        unique:true,
        trim:true
    }, 
    password:{
        type: String,
        required: true,
        trim:true
    }
   
  
},{timestamps:true})


studentSchema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password,10);
}

studentSchema.methods.isValid = function(hashedpassword){
    return  bcrypt.compareSync(hashedpassword, this.password);
}

module.exports= mongoose.model("student",studentSchema)