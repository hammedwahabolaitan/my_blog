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
//     deletePost
// }


// const Url = 'http://localhost:2020/'

// const getSingleBlog = async()=>{

// return await axios.get(baseUrl + 'selectid') 


// }

// export {
//     getSingleBlog
// }



// Card2

// import React from "react";
// import { useState, useEffect } from "react";
// import { getAllBlog, } from "./api";

// export default function Card2() {
//   const [info, setInfo] = useState([]);


//   function handleDelete(postid) {
//     console.log("ddd")
//     deletePost(postid)
//   }

//   const getInfo =async () => {
//     console.log('get info called');
    
//     await getAllBlog()
//     .then((res)=>{
//       setInfo(res.data.result)
//       console.log(res.data.result);
//     console.log('got res');
      
//     }
//     )
//     .catch((err)=>{
//     // console.log('got error');
//     // console.log(err);

//     });
//   };

//   useEffect(() => {
//     getInfo()
//   }, []);
//   return (
//     <div>
//       <div className="flex-wrap border-4 justify-around md:flex gap-y-10 py-10 px-10 lg:px-20">
//         { info.map((post)=>(
        
        
//         <div key={post.id} className="p-2 border border-gray-00 overflow-hidden rounded-xl md:w-[30%] ">
//           <a href="">
//             <img
//               src="src/assets/img/tm-486-new-event.jpg "
//               className="w-[50vw] h-[40vh]"
//               alt=""
//             />
//           </a>
//           <div className="p-5">
//             <a href="">
//               <h2 className="text-2xl text-red-900 text-center" >{post.title} </h2>
//             </a>
//             <a href="">
//               <p className="text-gray-400">
//                 {post.content}
//               </p>
//             </a>
//             <hr />
//             <div className="flex items-center justify-between mt-5">
//               <div className="">{post.author}</div>
//               <div className="flex items-center justify-between gap-2">
//                 <i
//                   className="pi pi-trash pi-spin   border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-blue-500 "
//                   style={{ fontSize: "1rem" }}
//                 >
//                   Edit
//                 </i>
//               </div>
//               <i className="pi pi-trash  border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-red-500 " onClick={handleDelete(post.id )}>
//                 Delete
//               </i>
//             </div>
//           </div>
//         </div>

//         ))}



      
//       </div>
//     </div>
//   );
// }







// card2

// import React, { useState, useEffect } from "react";
// import { getAllBlog} from "./api";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// export default function Card2() {
//   const [info, setInfo] = useState([]);
//   const [reloade, setReload]= useState("")
//   // const navigate = useNavigate();
//   // const goto = () => {
//   //   navigate(`/singleBlogItems/${data.id}`);
//   // };
//   // Function to retrieve all blogs
//   const getInfo = async () => {
//     try {
//       console.log("Fetching all blogs...");
//       const res = await getAllBlog();
//       // console.log(res.result)
//       setInfo(res.result);  
//       setReload("")
//       console.log("Blogs retrieved:", res);
//     } catch (error) {
//       console.error("Error fetching blogs:", error);
//     }
//   };
// async function handleDelete(id) {
//  const response = await   axios.get('http://localhost:2020/delete/'+id)
//  setReload(1)
// console.log(response);
// }
//   function handleNavigate(id) {
  
//     navigate("/BlogPage?id="+id);

//     // alert('jjs')
//  }

 


//   // Fetch all blogs on component mount
//   useEffect(() => {
//     getInfo();
//   }, [reloade]);
//   return (
//     <div>
//       <div className="flex-wrap justify-around md:flex gap-y-10 py-10 px-10 lg:px-20">
//         {info.map((post) => (
//           <div key={post.id} className="p-2 border border-gray-200 overflow-hidden rounded-xl md:w-[30%]">
//             <a href={"/BlogPage"}>
//               <img
//                 src={post.imageName}
//                 className="w-[50vw] h-[40vh]"
//                 alt=""
//               />
//             </a>
//             <div className="p-5">
//               <a href="">
//                 <h2 className="text-2xl text-red-900 text-center">{post.title}</h2>
//               </a>
//               {/* <a href=""> */}
//                 <p className="text-gray-400">{post.content} <span className="text-blue-700 cursor-pointer" onClick={() => handleNavigate(post.id)} >  ...read more</span></p>
//               {/* </a> */}
//               <hr />
//               <div className="flex items-center justify-between mt-5">
//                 <div>{post.author}</div>
//                 <div className="flex items-center justify-between gap-2">
//                   <i
//                     className="pi pi-pencil border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-blue-500"
//                     style={{ fontSize: "1rem" }} // onClick={()=>goto('/EditPage')}
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
