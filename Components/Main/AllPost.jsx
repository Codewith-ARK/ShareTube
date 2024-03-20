import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Post from '../Post/Post';
import { PostContext } from '@/context/postContext';

export default function AllPost() {
  const { POSTS, setPOSTS } = useContext(PostContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/getAllPosts');
        console.log(response)
        setPOSTS(response.data); // Update POSTS context with fetched data
        setLoading(false); // Set loading state to false after fetching data
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts(); // Call the fetchPosts function when the component mounts
  }, []); // Run this effect only once when the component mounts

  const renderPosts = () => {
    if (loading) {
      return <p>Loading...</p>;
    } else if (POSTS.length > 0) {
      return POSTS.map((item, key) => (
        <Post key={key} title={item.title} link={item.link} category={item.category}/>
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
