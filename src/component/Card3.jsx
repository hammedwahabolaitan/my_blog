import React from "react";
import { useState, useEffect } from "react";
import { getAllBlog } from "./api";

export default function Card3() {

 
  const [info, setInfo] = useState([]);

  const getInfo =async () => {
    console.log('get info called');
    
    await getAllBlog()
    .then((res)=>{
      setInfo(res.data.result)
      console.log(res.data.result);
    console.log('got res');
      
    }
    )
    .catch((err)=>{
    console.log('got error');
    console.log(err);

    });
  };

  useEffect(() => {
    getInfo()
  }, []);
  return (
    <div>
      <div className="flex-wrap border-4 justify-around md:flex gap-y-10 py-10 px-10 lg:px-20">
        { info.map((post)=>(
        
        
        <div key={post.id} className="p-2 border border-gray-00 overflow-hidden rounded-xl md:w-[30%] ">
          <a href="">
            <img
              src="src/assets/img/tm-486-new-event.jpg "
              className="w-[50vw] h-[40vh]"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="">
              <h2 className="text-2xl text-red-900 text-center" >{post.title} </h2>
            </a>
            <a href="">
              <p className="text-gray-400">
                {post.content}
              </p>
            </a>
            <hr />
            <div className="flex items-center justify-between mt-5">
              <div className="">{post.author}</div>
              <div className="flex items-center justify-between gap-2">
                <i
                  className="pi pi-trash pi-spin   border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-blue-500 "
                  style={{ fontSize: "1rem" }}
                >
                  Edit
                </i>
              </div>
              <i className="pi pi-trash  border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-red-500 " >
                Delete
              </i>
            </div>
          </div>
        </div>

        ))}



      
      </div>
    </div>
  );
}
