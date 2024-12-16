// import Header from "../component/Header";
// import React, { useEffect, useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { useRecoilState } from "recoil";
// import { nblogState } from "../utils/atom/nblogAtom";
// import { toast } from "react-toastify";
// import { Await, Navigate, useNavigate } from "react-router-dom";
// import axios from "axios";
// import db from "../page/firebase/config";
// import { useLocation } from "react-router-dom";
// // import { createNewBlog } from './api';
// // import { useNavigate } from 'react-router-dom';
// export default function EditPage() {
//   const Location = useLocation();
//   const query = new URLSearchParams(location.search);

//   const [image, setImage] = useState(null);
//   const [nblog, setNblog] = useRecoilState(nblogState);
//   const [form, setForm] = useState({
//     // author: "",
//     // title: "",
//     // content: "",
//     // image:null
//   });

//   const navigate = useNavigate;
//   const goto = () => {
//     navigate(`/singleBlogItems/${data.id}`);
//   };

//   const getBlogs = async () => {
//     const docRef = await addDoc(collection(db, "blog"), form);
//     navigate("/");
//     console.log(form);
//   };

//   useEffect(() => {
//     // console.log(data, "data, before api");
//   }, []);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm((prevUser) => ({
//       ...prevUser,
//       ...form,
//       [name]: value,
//     }));
//   };

//   //   const handleSubmit = (e) => {
//   //     e.preventDefault();

//   // async function submit() {
//   //   const id = query.get('id')
//   //   const response= await axios.post(`http://localhost:2020/edit`,{
//   //     headers: {
//   //       // 'Content-Type': 'multipart/form-data'
//   //     }

//   //   },{
//   //     postid:id,
//   //     title: form.title,
//   //     content: form.content,
//   //     author: form.author
//   //   })

//   // // 'Content-Type': 'multipart/form-data'

//   //   console.log(response);
//   //   // alert(response.data.status)
//   //   toast.success(response.data.status ,{position:"top-right"})
//   //   setForm({
//   //     author: "",
//   //     title: "",
//   //     content: "",
//   //     // image:null
//   //   })

//   // }
//   // submit()
//   //   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const submit = async () => {
//       try {
//         const id = new URLSearchParams(window.location.search).get("id"); // Ensure `query` is retrieved correctly
//         if (!id) {
//           toast.error("Post ID is missing", { position: "top-right" });
//           return;
//         }

//         const response = await axios.post(`http://localhost:2020/edit`, {
//           postid: id,
//           title: form.title,
//           content: form.content,
//           author: form.author,
//         });

//         console.log(response.data);
//         toast.success(response.data.status, { position: "top-right" });

//         setForm({
//           author: "",
//           title: "",
//           content: "",
//         });
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         toast.error("Failed to update post", { position: "top-right" });
//       }
//     };

//     submit();
//   };

//   const handleFile = (event) => {
//     setImage(event.target.files[0]);
//   };

//   return (
//     <div>
//       <Header />
//       <form onSubmit={handleSubmit}>
//         <div className="form px-32">
//           <div className="new_blog uppercase my-5">
//             <h3>Add New Blog</h3>
//           </div>
//           <label className="font-bold uppercase" htmlFor="author">
//             Author
//           </label>{" "}
//           <br />
//           <input
//             onChange={handleChange}
//             className="text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl"
//             name="author"
//             value={form.author}
//             type="text"
//             placeholder="ENTER AUTHOR NAME"
//             id="author"
//           />
//           <br />
//           <label htmlFor="title">TITLE</label> <br />
//           <input
//             onChange={handleChange}
//             className="text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl"
//             name="title"
//             value={form.title}
//             type="text"
//             placeholder="ENTER BLOG TITLE"
//             id="title"
//           />{" "}
//           <br />
//           <label htmlFor="content">CONTENT</label> <br />
//           <input
//             onChange={handleChange}
//             className="text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl"
//             name="content"
//             value={form.content}
//             type="text"
//             placeholder="ENTER BLOG CONTENT"
//             id="content"
//           />{" "}
//           <br />
//           <label htmlFor="content">IMAGE </label> <br />
//           <input
//             onChange={handleFile}
//             className="text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl"
//             type="file"
//             name="image"
//             id=""
//           />{" "}
//           <br />
//           <button
//             className="border border-gray-800 px-52 py-2 rounded-lg bg-blue-800 items-center"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { nblogState } from "../utils/atom/nblogAtom";
// import { toast } from "react-toastify";
// import Header from "../component/Header";
// import { updateBlog } from "./api"; // Importing the API function

// export default function EditPage() {
//     const location = useLocation();
//     const query = new URLSearchParams(location.search);
//     const navigate = useNavigate();

//     const [form, setForm] = useState({
//         author: "",
//         title: "",
//         content: "",
//         image: null,
//     });

//     const [image, setImage] = useState(null);
//     const [nblog, setNblog] = useRecoilState(nblogState);

//     const postId = query.get("id");

//     useEffect(() => {
//         if (postId) {
//             // Here you would fetch the current blog data to populate the form.
//             // For example:
//             // setForm({ title: 'Existing Title', content: 'Existing Content', author: 'Existing Author' });
//         } else {
//             toast.error("Blog ID is missing", { position: "top-right" });
//         }
//     }, [postId]);

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setForm((prevForm) => ({
//             ...prevForm,
//             [name]: value,
//         }));
//     };

//     const handleFileChange = (event) => {
//         setImage(event.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!postId) {
//             toast.error("Blog ID is missing", { position: "top-right" });
//             return;
//         }

//         try {
//             const response = await updateBlog(
//                 postId,
//                 form.title,
//                 form.content,
//                 form.author,
//                 image
//             );
//             toast.success(response.status, { position: "top-right" });
//             setForm({
//                 author: "",
//                 title: "",
//                 content: "",
//                 image: null,
//             });
//             navigate(`/${postId}`); // Navigate to the blog post page after successful update
//         } catch (error) {
//             // console.error("Error updating the blog:", error);
//             toast.error("Failed to update blog", { position: "top-right" });
//         }
//     };

//     return (
//         <div>
//             <Header />
//             <form onSubmit={handleSubmit}>
//                 <div className="form px-32">
//                     <div className="new_blog uppercase my-5">
//                         <h3>Edit Blog</h3>
//                     </div>
//                     <label className="font-bold uppercase" htmlFor="author">
//                         Author
//                     </label>{" "}
//                     <br />
//                     <input
//                         onChange={handleChange}
//                         className="text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl"
//                         name="author"
//                         value={form.author}
//                         type="text"
//                         placeholder="ENTER AUTHOR NAME"
//                         id="author"
//                     />
//                     <br />
//                     <label htmlFor="title">TITLE</label> <br />
//                     <input
//                         onChange={handleChange}
//                         className="text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl"
//                         name="title"
//                         value={form.title}
//                         type="text"
//                         placeholder="ENTER BLOG TITLE"
//                         id="title"
//                     />{" "}
//                     <br />
//                     <label htmlFor="content">CONTENT</label> <br />
//                     <textarea
//                         onChange={handleChange}
//                         className="text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl"
//                         name="content"
//                         value={form.content}
//                         placeholder="ENTER BLOG CONTENT"
//                         id="content"
//                     />{" "}
//                     <br />
//                     <label htmlFor="image">IMAGE</label> <br />
//                     <input
//                         onChange={handleFileChange}
//                         className="text bg-black border border-gray-800 py-2 px-52 my-7 rounded-xl"
//                         type="file"
//                         name="image"
//                         id="image"
//                     />{" "}
//                     <br />
//                     <button
//                         className="border border-gray-800 px-52 py-2 rounded-lg bg-blue-800 items-center"
//                         type="submit"
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }
