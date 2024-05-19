import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Emoji from '../emoji/Emoji';
import { usePostsSelector , useFetchPosts, usePostsStatus} from './postsHooks';

const Posts = (props) =>{
    const dispatch =  useDispatch();
    const postsList = usePostsSelector()
    // const postsList = useSelector(posts)
    const callFetchPosts = useFetchPosts()
    const postsStatus = usePostsStatus()

    useEffect(()=>{
        callFetchPosts()
    },[])
    return(
        <>
        <h2>Posts</h2>
        {
            postsStatus !=='success' ? <h2>{postsStatus}</h2> :
            postsList.map((post,i) =>{
                return(
                    <article key={post.id} className='post'>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <Emoji index={i} id={post.id} post={post}/>
                    </article>
                )
            })
        }
        </>
    )
}
export default Posts