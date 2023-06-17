import React from 'react'
import { savedPosts } from './posts.json';
import css from './css/PostItem.module.css';


function PostItem(props) {
  return (
    <div>
          {savedPosts.map(post => {
              return (
                  <div className={css.SearchItem}>
                      <p>{post.title}</p>
                      <p>{post.name}</p>
                      <img src={post.image} />
                      <p>{post.description}</p>
                  </div>
              );
          })}
    </div>
  )
}

export default PostItem