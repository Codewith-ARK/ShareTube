import { PostContext } from '@/context/postContext';
import React, { useContext, useState } from 'react'

export default function MakePost() {

  const { POSTS, setPOSTS } = useContext(PostContext);
  const [postTitle, setPostTitle] = useState('');
  const [postLink, setPostLink] = useState('');

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();
    setPOSTS([...POSTS, { title: postTitle, link: postLink }]);
    setPostTitle('');
    setPostLink('');
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
      <button
        type="submit"
        className='pt-3 text-blue-400 p-1'>
        Submit
      </button>
      <div>
      </div>
    </form>
  )
}
