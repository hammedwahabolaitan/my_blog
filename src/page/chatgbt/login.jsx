// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { userState } from "../utils/atom/userAtom";
// // import { GoogleLogin } from "@react-oauth/google";

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign-Up
//   const navigate = useNavigate();
//   const [user, setUser] = useRecoilState(userState);

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     username: "",
//     phoneNumber: "",
//   });

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevForm) => ({
//       ...prevForm,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const endpoint = isLogin ? "/login" : "/signup";

//     try {
//       const response = await axios.post(`http://localhost:2020${endpoint}`, form);
//       if (response.data.status === "Added successfully" || response.data.status === "Login successful") {
//         toast.success(response.data.status, { position: "top-right" });
//         if (isLogin) {
//           setUser(response.data.result[0]); // Save logged-in user data to global state
//           navigate("/"); // Redirect to the homepage
//         } else {
//           toggleForm(); // Switch to login after successful sign-up
//         }
//       } else {
//         toast.error("An error occurred", { position: "top-right" });
//       }
//     } catch (error) {
//       toast.error("Authentication failed", { position: "top-right" });
//       console.error(error);
//     }
//   };

//   const handleGoogleLoginSuccess = async (credentialResponse) => {
//     try {
//       const response = await axios.post("http://localhost:2020/auth/google", {
//         token: credentialResponse.credential,
//       });
//       if (response.data.status === "Login successful") {
//         toast.success(response.data.status, { position: "top-right" });
//         setUser(response.data.result); // Save user to global state
//         navigate("/");
//       }
//     } catch (error) {
//       toast.error("Google login failed", { position: "top-right" });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-center text-3xl font-bold">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>

//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             {!isLogin && (
//               <>
//                 <div>
//                   <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                     Username
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     name="username"
//                     value={form.username}
//                     onChange={handleInputChange}
//                     required={!isLogin}
//                     className="w-full px-3 py-2 border rounded-lg text-black"
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//                     Phone Number
//                   </label>
//                   <input
//                     type="text"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={form.phoneNumber}
//                     onChange={handleInputChange}
//                     required={!isLogin}
//                     className="w-full px-3 py-2 border rounded-lg text-black"
//                   />
//                 </div>
//               </>
//             )}

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-lg text-black"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={form.password}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-lg text-black"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mt-4"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <div className="mt-4">
//           <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={() => toast.error("Google Login Failed")} />
//         </div>

//         <p className="text-center text-sm text-gray-600 mt-4">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
//           <button onClick={toggleForm} className="text-blue-600 hover:underline">
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;




//locastorage

// import React, { useEffect, useState } from 'react';
// import { useRecoilState } from 'recoil';
// import { userState } from '../utils/atom/userAtom';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// const AuthPage = () => {
//   const [isLogin, setIsLogin] = useState(true);
//   const navigate = useNavigate()

//   const [user, setUser] =useRecoilState(userState)
//   const [form, setForm] =useState({
//     email: '',
//     password:''
//   })



 
  
//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
    
//     // Handle input changes for both forms
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//     setUser(form)
//     toast.success('User logged in successfully',{position:"top-right"});
//     navigate('/')
//     // Handle form submission for both Login/Signup
//   };

  
 
//   useEffect(()=>{
//     // console.log(form, "data, before api");
//    },[form]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
//         <h2 className="text-center text-3xl font-bold">
//           {isLogin ? 'Login' : 'Sign Up'}
//         </h2>

//         {/* Form */}
//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">

//             {/* Name input for Sign Up */}
//             {!isLogin && (
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   onChange={handleInputChange}
//                   required={!isLogin}
//                   className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-black"
//                 />
//               </div>
//             )}

//             {/* Email input for both */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={form.email}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black"
//               />
//             </div>

//             {/* Password input for both */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 id="password"
//                 value={form.password}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  text-black"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-4 hover:bg-indigo-700"
//           >
//             {isLogin ? 'Sign In' : 'Sign Up'}
//           </button>
//         </form>

//         {/* Toggle between Login and Sign Up */}
//         <p className="text-center text-sm text-gray-600">
//           {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
//           <button
//             type="button"
//             onClick={toggleForm}
//             className="text-indigo-600 hover:text-indigo-500"
//           >
//             {isLogin ? 'Sign Up' : 'Login'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;










import React from "react";

const AuthPage = () => {
  const handleSocialLogin = (provider) => {
    window.location.href = `http://localhost:2020/auth/${provider}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">
        <h2 className="text-center text-3xl font-bold">Login</h2>

        {/* Social Login */}
        <div className="space-y-4">
          <button
            className="w-full bg-red-600 text-white py-2 rounded-lg"
            onClick={() => handleSocialLogin("google")}
          >
            Login with Google
          </button>
          <button
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
            onClick={() => handleSocialLogin("facebook")}
          >
            Login with Facebook
          </button>
          <button
            className="w-full bg-gray-900 text-white py-2 rounded-lg"
            onClick={() => handleSocialLogin("github")}
          >
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;



