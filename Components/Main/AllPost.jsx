import { useState, useEffect, useContext } from 'react';
import Post from '../Post/Post';
import { PostContext } from '@/context/postContext';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function AllPost() {

  const { posts, setPosts, fetchPosts } = useContext(PostContext);
  const [loading, setLoading] = useState(true);
  const {user} = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false); // Set loading state to false even if an error occurs
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  const renderPosts = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (posts.length > 0) {
      return posts.map((item, key) => (
        <Post key={key} id={item.id} title={item.post_title} link={item.post_link} category={item.post_category} author={user.sid} />
      ));
    } else {
      return <p>No posts</p>;
    }
  };

  return (
    <section className='py-6 grid'>
      <h3 className='text-xl font-bold'>Recent Posts</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-6 py-6 bg-gradient-to-b from-white/[0.3] to-gray-400/[0.1] rounded-2xl border border-white/[0.3]'>
        {renderPosts()}
      </div>
    </section>
  );
}
