
const getUser = async (url) => {
    try{
        const res = await fetch(url)
        const obj = await res.json()
        return obj
    }catch(err){
       console.log('ERROR --> ', err); 
    }
    
    
}

module.exports = {getUser};