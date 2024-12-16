import Header from '../component/Header';
import React, { useEffect, useState } from 'react';
import { collection, addDoc } from "firebase/firestore"; 
import { useRecoilState } from 'recoil'
import { nblogState } from '../utils/atom/nblogAtom';
import { toast } from 'react-toastify';
import { Await, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import db from '../page/firebase/config';
// import { createNewBlog } from './api';
// import { useNavigate } from 'react-router-dom';



export default function AddNewBlog() {
 
const  [image, setImage] =useState(null)
  const [nblog, setNblog] =useRecoilState(nblogState)
  const [form, setForm] = useState({
    author: "",
    title: "",
    content: "",
    // image:null
  })

const navigate =useNavigate

  const getBlogs = async() =>{
  const docRef = await addDoc(collection(db, "blog"), form)
navigate('/')
  // console.log(form);
};

useEffect(()=>{
  // console.log(data, "data, before api");
 },[]);


  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevUser) =>({
    ...prevUser,
      ...form,
      [name]: value
      
    }));
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();

async function submit() {
  const response= await axios.post('https://my-blog-api-00yf.onrender.com/input',{
    title: form.title,
    content: form.content,
    author: form.author,
    image: image


  } ,{
    headers: {
      'Content-Type': 'multipart/form-data',
    }

  })
  console.log(response);
  // alert(response.data.status)
  toast.success(response.data.status ,{position:"top-right"})
  setForm({
    author: "",
    title: "",
    content: "",
    // image:null
  })
}
submit()
  };

  const handleFile = (event) => {
    setImage(event.target.files[0])
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <div className="form px-32">
          <div className="new_blog uppercase my-5">
            <h3>Add New Blog</h3>
          </div>
          <label className='font-bold uppercase' htmlFor="author">Author</label> <br />
          <input onChange={handleChange}  className='text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl' name="author" value={form.author} type="text" placeholder="ENTER AUTHOR NAME" id="author" /><br />
          <label htmlFor="title">TITLE</label> <br />
          <input onChange={handleChange}  className='text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl' name="title" value={form.title} type="text" placeholder="ENTER BLOG TITLE" id="title" /> <br />
          <label htmlFor="content">CONTENT</label> <br />
          <input onChange={handleChange} className='text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl' name="content" value={form.content} type="" placeholder="ENTER BLOG CONTENT" id="content" /> <br />
          <label htmlFor="image">IMAGE</label> <br />
          <input onChange={handleFile} className='text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl' type="file" name="image" id="" /><br />
          <button className='border border-gray-800 px-52 py-2 rounded-lg bg-blue-800 items-center' type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
