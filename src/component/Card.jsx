import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
// import imgpost from "./src/assets/img/bld.png";

export default function Card({data}) {
  const navigate = useNavigate();

  const goto = () => {
    navigate(`/singleBlogItems/${data.id}`);
  };
  
  useEffect(()=>{

    console.log(data, 'data from component');
    
  },[])
  return (
    <div>
      <div className=" border border-gray-800 overflow-hidden rounded-xl  w-[full] h-[300px] md:w[45%] lg:w  ">
        <img src='' className='w-full' alt="" />
        <div className="p-5">
          <h2 className='text-2xl'>{data.title}</h2>
          <p className='text-gray-400 size'>  {data.content} <span  onClick={()=>goto('/BlogPage')} className='text-blue-500 cursor-pointer'>read more</span> </p>
        <hr />
        <div className="flex items-center justify-between mt-5">
          <div className="">{data.author}</div>
          <div className="flex items-center justify-between gap-2">
            <i onClick={()=>goto('/BlogPage')} className="pi pi-trash pispin  border border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-blue-500 " style={{ fontSize: '1rem' }}>Edit</i>
          </div>
            <i className="pi pi-trash border border-red-500 cursor-pointer rounded-lg py-1 px-2 text-red-500 ">Delete</i>
            

        </div>
        </div>
      </div>
    </div>
  )
}
