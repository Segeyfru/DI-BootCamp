
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'
import { updateImages } from './slice'



const UpdateScore = ({id})=>{
    const dispatch = useDispatch()
     
    const updateScore = async(likeDislike)=>{
dispatch(updateImages({id,likeDislike}))

    }

    return (
        <div>
        <button onClick={()=>updateScore(1)}><FontAwesomeIcon icon={faThumbsUp} /></button> 
        <button onClick={()=>updateScore(-1)}><FontAwesomeIcon icon={faThumbsDown} /></button>
        </div>
    )
}

export default UpdateScore