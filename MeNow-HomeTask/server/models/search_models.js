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
    console.log(id, typeof likeDislike);
    try {
        const updatedList = jsonData.map(image =>{
            if(image.id === id){
                console.log(typeof image.score);
                const newScore = parseInt(image.score) + likeDislike
                image.score = newScore
            }
            return image
        })
        // console.log(updatedList);
        return updatedList
    } catch (error) {
        console.log('Error in models "changeScore"=>', error);
        throw new Error('Fetching Failed, Error in models "changeScore"')
    }
}