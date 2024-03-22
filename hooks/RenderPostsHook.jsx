import React from 'react'

export default function RenderPostsHook(callback, dependencies) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPosts();
        setPosts(response);
        console.log(response)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false); // Set loading state to false even if an error occurs
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);


}
