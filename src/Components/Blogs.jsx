import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

 

const Blogs = () => {
    const [blog,setBlog] = useState([]);

    useEffect(()=>{
           fetch('blog.json')
           .then(res => res.json())
           .then(data => setBlog(data));
    },[]);

    return (
        <div>
             <h1>Blog: {blog.length}</h1>
            {
                blog.map(bg_data => <Blog key={bg_data.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;