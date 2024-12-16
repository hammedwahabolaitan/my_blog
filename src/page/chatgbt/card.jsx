// import React, { useState, useEffect } from "react";
// import { getAllBlog,deleteBlog } from "./api";
// import axios from "axios";
// import { useRecoilValue } from "recoil";
// import { userState } from "../utils/atom/userAtom";
// import Header from "./Header";
// import { useNavigate } from "react-router-dom";



// export default function Card2() {
//   const navigate = useNavigate();
//   const [info, setInfo] = useState([]);
//   const [reload, setReload] = useState(false); // Changed reload to boolean
//    const jwttoken = useRecoilValue(userState);
//   // Function to retrieve all blogs
  

//   // Handle delete blog post by ID
//   const handleDelete = async (id) => {
//     var response =  deleteBlog(id)
// console.log(response);

//     response.data.id
//     // try {
//     //   const response = await axios.get(`http://localhost:2020/delete/${id}`);
//     //   console.log(response);
//     //   setReload(!reload); // Toggle reload state to trigger re-fetch
//     // } catch (error) {
//     //   console.error("Error deleting blog:", error);
//     // }
//   };

//   // Handle navigation to the blog page
//   const handleNavigate = (id) => {
//     window.location.href = `/BlogPage?id=${id}`; // Redirect to BlogPage with ID in query
//   };
//   const handleEdit = (id) => {
//     window.location.href = `/EditPage?id=${id}`; // Redirect to BlogPage with ID in query
//   };

//   // Fetch all blogs on component mount and when reload changes

//   const loaddata = async (jwttoken) => {
//     var response= await getAllBlog(jwttoken);
//     var data = await response.data

// if(response.data.status=="failed"){
//           navigate("/LoginPage");
//         }else{
//         setInfo(data.result);
//         }
//      console.log(data);
  
//   }

//   useEffect(() => {
  
//     loaddata(jwttoken)
//     deleteBlog()
//   }, [reload]);

//   return (
//     <div>
//       <div className="flex-wrap justify-around md:flex gap-y-10 py-10 px-10 lg:px-20">
//         <h1>hello</h1>
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
//                     onClick={() => handleEdit(post.id)}
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























// import React, { useState, useEffect } from "react";
// import { getAllBlog } from "./api";
// import axios from "axios";
// import { useRecoilValue } from "recoil";
// import { userState } from "../utils/atom/userAtom";
// import Header from "./Header";
// import { useNavigate } from "react-router-dom";
// // export default function Card2() {
//   const navigate = useNavigate();
//   const [info, setInfo] = useState([]);
//   const [reload, setReload] = useState(false); // Changed reload to boolean
//    const jwttoken = useRecoilValue(userState);
//   // Function to retrieve all blogs
  

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
//   const handleEdit = (id) => {
//     window.location.href = `/EditPage?id=${id}`; // Redirect to BlogPage with ID in query
//   };

//   // Fetch all blogs on component mount and when reload changes
//   useEffect(() => {
//     // getInfo();
//     async function fetchposts() {
//       const response = await axios.get('http://localhost:2020/bloglist',{headers:{"Authorization":`Bearer ${jwttoken}`} });
//       if(response.data.status=="failed"){
//         navigate("/LoginPage");
//       }else{
//       setInfo(response.data.result);
//       }
     
//       // setInfo(response.data.result);
//       // console.log(response);
      
//     }
//     fetchposts()
//   }, [reload]);

//   return (
//     <div>
//       <div className="flex-wrap justify-around md:flex gap-y-10 py-10 px-10 lg:px-20">
//         <h1>hello</h1>
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
//                     onClick={() => handleEdit(post.id)}
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
