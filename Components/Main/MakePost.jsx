import { PostContext } from '@/context/postContext';
import axios from 'axios';
import React, { useContext, useState } from 'react'

export default function MakePost() {

  const { POSTS, setPOSTS } = useContext(PostContext);
  const [postTitle, setPostTitle] = useState('');
  const [postLink, setPostLink] = useState('');
  const [postCategory, setPostCategory] = useState('');

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    const data = { title: postTitle, link: postLink, category: postCategory }
    axios.post('/api/addPost', data)
      .catch(e => console.log(e))
    // setPOSTS([...POSTS, { title: postTitle, link: postLink }]);

    setPostTitle('');
    setPostLink('');
    setPostCategory('');
  }

  return (
    <form onSubmit={submitHandler} className='flex flex-col items-start border border-gray-400 overflow-clip rounded-lg shadow-lg'>
      <input
        className='border-gray-800 p-1 text-lg w-full focus:border-0'
        type="text"
        name="title"
        value={postTitle}
        placeholder='Playlist Title'
        autoComplete='off'
        onChange={(e) => {
          setPostTitle(e.target.value)
        }} />
      <input
        className='border-gray-800 p-1 w-full focus:border-0'
        type="text"
        name="link"
        placeholder='https://www.youtube.com/playlist?list='
        autoComplete='off'
        value={postLink}
        onChange={(e) => {
          setPostLink(e.target.value)
        }} />
      <input
        className='border-gray-800 p-1 w-full focus:border-0'
        type="text"
        name="link"
        placeholder='Category'
        autoComplete='off'
        value={postCategory}
        onChange={(e) => {
          setPostCategory(e.target.value)
        }} />

      <button
        type="submit"
        className='pt-3 text-blue-600 p-1'>
        Submit
      </button>
      <div>
      </div>
    </form>
  )
}
