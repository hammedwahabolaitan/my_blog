import axios from "axios";

const baseUrl = 'https://my-blog-api-00yf.onrender.com/';


// Fetch all blogs
const getAllBlog = async (jwttoken) => {
    try {
        const response = await axios.get(`${baseUrl}bloglist`, {
            headers: { "Authorization": `Bearer ${jwttoken}` },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error;
    }
};

// Fetch a single blog by ID
const getSingleBlog = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}selectid/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching single blog:", error);
        throw error;
    }
};

// Delete a blog by ID
const deleteBlog = async (id) => {
    try {
        const response = await axios.get(`${baseUrl}delete/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting blog:", error);
        throw error;
    }
};



// Function to handle the editing of a blog post
// const updateBlog = async (id, title, content, author, image) => {
//     try {
//         const response = await axios.post(`${baseUrl}edit`, {
//             postid: id,
//             title: title,
//             content: content,
//             author: author,
//             image: image,
//         });
//         return response.data;
//     } catch (error) {
//         // console.error("Error updating blog:", error);
//         throw error;
//     }
// };

export {  };

export {
    getAllBlog,
    getSingleBlog,
    deleteBlog,
    // updateBlog
};
