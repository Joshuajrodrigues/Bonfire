import React, { FunctionComponent } from 'react'
import { IPopularPosts } from '../pages'



const TrendingCarousel:FunctionComponent<{popularPosts:IPopularPosts[]}> = ({popularPosts}) => {
  return (
    <>
    {
        popularPosts?.map((post)=>(
            <div key={post.mal_id} >
                {post.animeTitle} 
            </div>
        ))
    }
        
    </>
  )
}

export default TrendingCarousel