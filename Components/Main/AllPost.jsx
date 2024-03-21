import { useState, useEffect, useContext } from 'react';
import Post from '../Post/Post';
import { PostContext } from '@/context/postContext';

export default function AllPost() {
  const { posts, setPosts } = useContext(PostContext);
  const { fetchPosts } = useContext(PostContext)
  const [loading, setLoading] = useState(true);
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
        <Post key={key} id={item.id} title={item.title} link={item.link} category={item.category} />
      ));
    } else {
      return <p>No posts</p>;
    }
  };

  return (
    <section className='py-6 grid'>
      <h3 className='text-xl font-bold'>Recent Posts</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
        {renderPosts()}
      </div>
    </section>
  );
}
