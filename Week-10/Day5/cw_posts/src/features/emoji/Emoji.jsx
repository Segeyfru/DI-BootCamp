
import { useDispatch, useSelector } from 'react-redux'
import { memo } from 'react';
import { posts ,addReaction} from '../posts/postsSlice';


const Emoji = (props) => {
    console.log('reactionButton');
    const dispatch = useDispatch();
    const post = props.post

    const reactionEmoji = {
        thumbsUp: "👍",
        wow: "😮",
        heart: "❤️",
        rocket: "🚀",
        coffee: "☕",
    };

    const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name}
                className="reactionButton"
                onClick={()=>dispatch(addReaction({id:post.id,name}))}
            >
                {emoji} {post.reaction[name]}
            </button>
        )
    })

    return <div >{renderReaction}</div>


}

export default memo(Emoji)