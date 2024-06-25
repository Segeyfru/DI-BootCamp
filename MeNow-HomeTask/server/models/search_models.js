import jsonData  from '../config/MeNow_product_task.json'  assert { type: 'json' };


export const getAllData = async ()=>{
    try {
        return jsonData
    } catch (error) {
        console.log('Error in models "getAllData"=>', error);
        throw new Error('Fetching Failed, Error in models "getAllData"')
    }
}

export const changeScore =async ({id, likeDislike}) =>{
    try {
        const updatedList = jsonData.map(image =>{
            if(image.id === id){
                const newScore = parseInt(image.score) + likeDislike
                image.score = newScore
            }
            return image
        })
        return updatedList
    } catch (error) {
        console.log('Error in models "changeScore"=>', error);
        throw new Error('Fetching Failed, Error in models "changeScore"')
    }
}