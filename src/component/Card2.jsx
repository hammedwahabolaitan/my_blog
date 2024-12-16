import React, { useState, useEffect } from "react";
import { getAllBlog, deleteBlog } from "./api";
import { useRecoilValue } from "recoil";
import { userState } from "../utils/atom/userAtom";
import { useNavigate } from "react-router-dom";

const Card2 = () => {
    const navigate = useNavigate();
    const [info, setInfo] = useState([]);
    const [reload, setReload] = useState(false); // State to trigger re-fetch
    const jwttoken = useRecoilValue(userState);

    // Fetch all blogs on component mount and when reload changes
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await getAllBlog(jwttoken);
                if (response.status === "failed") {
                    navigate("/LoginPage");
                } else {
                    console.log(response);
                    
                    setInfo(response.result);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }
        fetchPosts();
    }, [reload, jwttoken, navigate]);

    // Handle delete blog post by ID
    const handleDelete = async (id) => {
        try {
            await deleteBlog(id);
            setReload(!reload); // Toggle reload state to re-fetch data
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    // Handle navigation to the blog page
    const handleNavigate = (id) => {
        navigate(`/BlogPage?id=${id}`); // Redirect to BlogPage with ID
    };

    // Handle navigation to the edit page
    const handleEdit = (id) => {
        navigate(`/EditPage?id=${id}`); // Redirect to EditPage with ID
    };

    return (
        <div>
            <div className="flex-wrap justify-around md:flex gap-y-10 py-10 px-10 lg:px-20">
                {info.map((post) => (
                    <div
                        key={post.id}
                        className="p-2 border border-gray-200 overflow-hidden rounded-xl md:w-[30%]"
                    >
                        <a href={`/BlogPage?id=${post.id}`}>
                            <img
                                src={post.imageName}
                                className="w-[50vw] h-[40vh]"
                                alt={post.title}
                            />
                        </a>
                        <div className="p-5">
                            <h2 className="text-2xl text-red-900 text-center">
                                {post.title}
                            </h2>
                            <p className="text-gray-400">
                                {post.content}
                                <span
                                    className="text-blue-700 cursor-pointer"
                                    onClick={() => handleNavigate(post.id)}
                                >
                                    {" "}
                                    ...read more
                                </span>
                            </p>
                            <hr />
                            <div className="flex items-center justify-between mt-5">
                                <div>{post.author}</div>
                                <div className="flex items-center justify-between gap-2">
                                    <i
                                        className="pi pi-pencil border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-blue-500"
                                        onClick={() => handleEdit(post.id)}
                                        style={{ fontSize: "1rem" }}
                                    >
                                        Edit
                                    </i>
                                </div>
                                <i
                                    className="pi pi-trash border-blue-500 cursor-pointer rounded-lg py-1 px-2 text-red-500"
                                    onClick={() => handleDelete(post.id)}
                                >
                                    Delete
                                </i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card2;
