const {db} = require('../config/data.js')


const _getQuestionWithOptions = async(id) =>{
    try {
        const [question] =await db('questions').select('id','question', 'correctanswer').where({id})
        const options = await db('options')
        .select('id', 'question_id', 'option')
        .where({question_id:id})


        return {question, options}

    } catch (error) {
        console.log('Catch module _getQuestionWithOptions');
        throw Error(error)
    }
}

const _updateUserAnswer = async(question_id, user_answer) =>{
    try {
        user_answer = parseInt(user_answer)
        question_id = parseInt(question_id)
        console.log(typeof question_id);
        const updatedAnswer = await db('questions_options').update({user_answer},['question_id','user_answer','correct_id']).where({question_id})
        return updatedAnswer
    } catch (error) {
        console.log('Catch module _updateUserAnswer');
        throw Error(error)
    }
}


module.exports = {
    _getQuestionWithOptions,
    _updateUserAnswer,
    
}