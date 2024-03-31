import { PostContext } from '@/context/postContext';
import { LuType, LuLink2, LuBookmark } from "react-icons/lu";
import axios from 'axios';
import React, { useContext, useState } from 'react'
import Category from './Category';
import validateLink from '@/Utils/Form';
import categories from './categories';

export default function MakePost() {

  const { posts, setPosts } = useContext(PostContext);
  const [postTitle, setPostTitle] = useState('');
  const [postLink, setPostLink] = useState('');
  const [postCategory, setPostCategory] = useState('');

  // Function to handle form submission
  const submitHandler = (e) => {
    e.preventDefault();

    if (!validateLink(postLink)) {
      console.error("Invalid Link");
      return;
    };

    const data = { title: postTitle, link: postLink, category: postCategory }
    axios.post('/api/addPost', data)
      .then((response) => {
        setPosts(posts => [...posts, response.data]); // Assuming response.data is the newly added post
      })
      .catch(e => console.log(e))

    setPostTitle('');
    setPostLink('');
    setPostCategory('');
  }

  return (
    <form onSubmit={submitHandler} className='flex flex-col gap-4 items-start overflow-clip shadow-lg 
    bg-gradient-to-b from-neutral-400/[0.3] to-white/[0.3] rounded-2xl border border-white/[0.3]
    px-7 py-3
    '>
      <div className='w-full flex items-center gap-4'>
        <LuType className='text-2xl text-white' />
        <input
          className='grow border-b border-transparent p-1 text-lg w-full focus:border-b focus:border-white bg-transparent outline-none'
          type="text"
          name="title"
          value={postTitle}
          placeholder='Enter title here'
          autoComplete='off'
          required
          minLength={3}
          onChange={(e) => {
            setPostTitle(e.target.value)
          }} />
      </div>
      <div className='w-full flex items-center gap-4'>
        <LuLink2 className='text-2xl text-white' />
        <input
          className='grow border-b border-transparent p-1 text-base w-full focus:border-b focus:border-white bg-transparent outline-none'
          type="text"
          name="link"
          placeholder='https://www.youtube.com/playlist?list='
          autoComplete='off'
          value={postLink}
          required
          minLength={38}
          onChange={(e) => {
            setPostLink(e.target.value)
          }} />
      </div>
      <div className='w-full flex items-center gap-4'>
        <LuBookmark className='text-2xl text-white' />
        <select
          className="bg-transparent border border-white rounded-lg"
          onChange={e => { setPostCategory(e.target.value) }}
          required
        >
          {categories.map((category, index) => (
            <option key={index} value={`${category.emoji} ${category.name}`}>{category.emoji} {category.name}</option>
          ))}
        </select>
      </div>

      {/* <div className='w-full flex items-center gap-4'>
        <LuBookmark className='text-2xl text-white'/>
        <input
          className='border-b border-white p-1 text-base bg-transparent outline-none'
          type="text"
          name="link"
          placeholder='Select Category'
          autoComplete='off'
          value={postCategory}
          required
          minLength={3}
          onChange={(e) => {
            setPostCategory(e.target.value)
          }} />

      </div> */}

      <button
        type="submit"
        className='text-white px-6 py-2 rounded-lg bg-[#F37852]'>
        Submit
      </button>
      <div>
      </div>
    </form>
  )
}
