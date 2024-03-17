import { PostContext } from '@/context/postContext';
import React, { useContext } from 'react';
import Post from './Post';

export default function Posts() {
  const { POSTS } = useContext(PostContext);

  const renderPosts = () => {
    if (POSTS.length > 0) {
      return POSTS.map((item, key) => (
        <Post key={key} title={item.title} link={item.link} />
      ));
    } else {
      return <p>No posts</p>;
    }
  };

  return <>
    <section className='py-6 grid'>
      <h3 className='text-xl font-bold'>Recent Posts</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {renderPosts()}
      </div>
    </section>
  </>;
}
