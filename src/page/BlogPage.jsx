

import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import axios from 'axios';
// import { getSingleBlog} from "./api";

import { useLocation } from 'react-router-dom';

const BlogPage = () => {
    const [info, setInfo] = useState([]);
    const location = useLocation()
    const query = new  URLSearchParams(location.search);
    async function getSingleBlog() {
        const id = query.get('id')
        const response = await   axios.get('http://localhost:2020/selectid/'+id)
        setInfo(response.data.result[0])
       console.log(response.data.result[0]);
       }
      useEffect(() => {
        getSingleBlog();
      }, []);
    return (
        
        <div className="container mx-auto p-4">
                  <Header />
                            <div className="mb-4 p-4 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-green-400 ">{info.title}</h2>
                    <img   src={info.imageName} alt='' className="w-full h-[full] rounded-lg mb-2"/>
                    <p className="text-gray-00">{info.content}</p>
                    <p className="text-2xl font-bold my-2 uppercase text-blue-500">{info.author}</p>
                </div>
        </div>
    );
};
export default BlogPage;
