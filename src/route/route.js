const express =require('express')
const router=express.Router()
const {createQuestion,getAllQuestions,getSingleQuestion,updateQuestions,deleteQuestion}=require('../controllers/questionController')

router.post('/questions',createQuestion)

router.get('/questions',getAllQuestions)

router.get('/question/:id',getSingleQuestion)

router.put('/question/:id',updateQuestions )

router.delete('/question/:id', deleteQuestion)

router.all("/**", (req,res)=>{
    return res.status(404).send({status:false, msg:"The Api you are requesting is not available"})
})


module.exports=router


