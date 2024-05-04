const {
    _getQuestionWithOptions,
    _updateUserAnswer,
    
} = require('../models/models.js')
let q_id = 6

const getQuestionWithOptions = async (req,res) =>{
    let {id} = req.body
    if(!id){
        id = q_id
    }

    try {
        const {question,options} = await _getQuestionWithOptions(id)
        console.log('id',question.id);
        res.status(200).json({question,options})
        q_id++
    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}

const updateUserAnswer = async(req,res) =>{
    let {question_id, user_answer} = req.body
    if(!question_id){
        question_id = q_id
    }

    try{
        const updatedAnswer = await _updateUserAnswer(question_id, user_answer)

        res.status(200).json({message: 'Answer Updated Successfully',updatedAnswer})
    } catch (error) {
        console.log(error);
        res.status(404).json(error)
    }
}



module.exports = {
        getQuestionWithOptions,
        updateUserAnswer,
}