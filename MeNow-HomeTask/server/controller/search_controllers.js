import { changeScore, getAllData } from "../models/search_models.js";


export const _getAllData = async(req,res)=>{
    try {
        const jsonData = await getAllData()
        // console.log(jsonData);
        res.json(jsonData)
    } catch (error) {
        console.log('Error in controllers "getAllData" =>', error);
        res.status(404).json({ msg: 'Fetching failed' })
        
    }
}


export const _changeScore = async (req,res)=>{
    const {id, likeDislike} = req.body
    try {
        const updatedData = await changeScore({id, likeDislike})
        // console.log(updatedData);
        res.json(updatedData)
    } catch (error) {
        console.log('Error in controllers "changeScore" =>', error);
        res.status(404).json({ msg: 'Fetching failed' })
    }
}