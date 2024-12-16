// card2


// import React, { useState, useEffect } from "react";
// import { getAllBlog } from "./api";
// import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// export default function Card2() {
//   const [info, setInfo] = useState([]);
//   const [reload, setReload] = useState(false); // Changed reload to boolean

//   // Function to retrieve all blogs
//   const getInfo = async () => {
//     try {
//       console.log("Fetching all blogs...");
//       const res = await getAllBlog();
//       setInfo(res.result);
//       console.log("Blogs retrieved:", res);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   // Handle delete blog post by ID
//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:2020/delete/${id}`);
//       console.log(response);
//       setReload(!reload); // Toggle reload state to trigger re-fetch
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//     }
//   };

//   // Handle navigation to the blog page
//   const handleNavigate = (id) => {
//     window.location.href = `/BlogPage?id=${id}`; // Redirect to BlogPage with ID in query
//   };

//   // Fetch all blogs on component mount and when reload changes
//   useEffect(() => {
//     getInfo();
//   }, [reload]);

//   return (
//     <div>
//       <div className="flex-wrap justify-around md:flex gap-y-10 py-10 px-10 lg:px-20">
//         {info.map((post) => (
//           <div key={post.id} className="p-2 border border-gray-200 overflow-hidden rounded-xl md:w-[30%]">
//             <a href={`/BlogPage?id=${post.id}`}>
//               <img
//                 src={post.imageName}
//                 className="w-[50vw] h-[40vh]"
//                 alt={post.title}
//               />
//             </a>
//             <div className="p-5">
//               <h2 className="text-2xl text-red-900 text-center">{post.title}</h2>
//               <p className="text-gray-400">
//                 {post.content}
//                 <span
//                   className="text-blue-700 cursor-pointer"
//                   onClick={() => handleNavigate(post.id)}
//                 >
//                   {" "}
//                   ...read more
//                 </span>
//               </p>
//               <hr />
//               <div className="flex items-center justify-between mt-5">
//                 <div>{post.author}</div>
//                 <div className="flex items-center justify-between gap-2">
//                   <i
//                     className="pi pi-pencil border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-blue-500"
//                     onClick={() => alert('Edit feature not implemented yet')}
//                     style={{ fontSize: "1rem" }}
//                   >
//                     Edit
//                   </i>
//                 </div>
//                 <i
//                   className="pi pi-trash border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-red-500"
//                   onClick={() => handleDelete(post.id)}
//                 >
//                   Delete
//                 </i>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// Header
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { userState } from "../utils/atom/userAtom";

// export default function Header() {
//   const user = useRecoilValue(userState)
//   const navigate = useNavigate();
//   const goto = (page) => {
//     navigate(page);
//   };

//   console.log(user, 'check user')
//   return (
//     <div>
//       <div className="header static">
//         <nav className="flex items-center justify-between px-32 border-b  border-gray-700 py-3 bg-black text-white h-[10vh]">
//           <h3 className="hover:border cursor-pointer px-5 py-2 rounded-lg uppercase">
//             My <span className="text-red-700 font-bold">Blog</span>{" "}
//           </h3>
//           <p>{user.email? "true":'false'}</p>
//           <ul className="flex">
//             <li
//               onClick={() => goto("/")}
//               className="hover:border cursor-pointer px-5 py-2 rounded-lg">
//               Home
//             </li>
//             {user.email?
//             <li
//             onClick={() => goto("/AddNewBlog")}
//             className="hover:border cursor-pointer px-5 py-2 rounded-lg">
//               Add new blog
//             </li>
//             :
//             <li
//             onClick={() => goto("/LoginPage")}
//             className="hover:border cursor-pointer px-5 py-2 rounded-lg">
//               Login
//             </li>
//               }
//           </ul>
//         </nav>
//       </div>
//     </div>
//   );
// }


// h

// import axios from "axios";

// import Header from "../component/Header";

// import Card2 from "../component/Card2";

// const baseUrl = 'http://localhost:2020/'

// const getAllBlog = async()=>{

// return await axios.get(baseUrl + 'interface') 


// }
// async function createNewBlog(title, content, author) {
// console.log("testing");

//         const response = await axios.post(baseUrl + 'input', {
//             title: title,
//             content: content,
//             author: author
//         });
//         console.log(response);
//         return response;
  
// }

// async function deletePost(postID){

//     const response = await axios.get('http://localhost:2020/delete?postid='+postID) 
//     console.log(response);
//         return response;
//     }

// export {
//     getAllBlog,
//     createNewBlog,
// 




// working card2 by gbt



// import React, { useState, useEffect } from "react";
// import { getAllBlog } from "./api";
// import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// export default function Card2() {
//   const [info, setInfo] = useState([]);
//   const [reload, setReload] = useState(false); // Changed reload to boolean

//   // Function to retrieve all blogs
//   const getInfo = async () => {
//     try {
//       console.log("Fetching all blogs...");
//       const res = await getAllBlog();
//       setInfo(res.result);
//       console.log("Blogs retrieved:", res);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };

//   // Handle delete blog post by ID
//   const handleDelete = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:2020/delete/${id}`);
//       console.log(response);
//       setReload(!reload); // Toggle reload state to trigger re-fetch
//     } catch (error) {
//       console.error("Error deleting blog:", error);
//     }
//   };

//   // Handle navigation to the blog page
//   const handleNavigate = (id) => {
//     window.location.href = `/BlogPage?id=${id}`; // Redirect to BlogPage with ID in query
//   };

//   // Fetch all blogs on component mount and when reload changes
//   useEffect(() => {
//     getInfo();
//   }, [reload]);

//   return (
//     <div>
//       <div className="flex-wrap justify-around md:flex gap-y-10 py-10 px-10 lg:px-20">
//         {info.map((post) => (
//           <div key={post.id} className="p-2 border border-gray-200 overflow-hidden rounded-xl md:w-[30%]">
//             <a href={`/BlogPage?id=${post.id}`}>
//               <img
//                 src={post.imageName}
//                 className="w-[50vw] h-[40vh]"
//                 alt={post.title}
//               />
//             </a>
//             <div className="p-5">
//               <h2 className="text-2xl text-red-900 text-center">{post.title}</h2>
//               <p className="text-gray-400">
//                 {post.content}
//                 <span
//                   className="text-blue-700 cursor-pointer"
//                   onClick={() => handleNavigate(post.id)}
//                 >
//                   {" "}
//                   ...read more
//                 </span>
//               </p>
//               <hr />
//               <div className="flex items-center justify-between mt-5">
//                 <div>{post.author}</div>
//                 <div className="flex items-center justify-between gap-2">
//                   <i
//                     className="pi pi-pencil border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-blue-500"
//                     onClick={() => alert('Edit feature not implemented yet')}
//                     style={{ fontSize: "1rem" }}
//                   >
//                     Edit
//                   </i>
//                 </div>
//                 <i
//                   className="pi pi-trash border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-red-500"
//                   onClick={() => handleDelete(post.id)}
//                 >
//                   Delete
//                 </i>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }