import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";



const Blogs = () => {
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data));
    }, []);

    return (
        <div>
            <h1>Blog: {blog.length}</h1>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-10">
                    {
                        blog.map(bg_data => <Blog blog={bg_data} key={bg_data.id}></Blog>)
                    }
                    
                </div>
                <div className="col-span-2">
                     <h2>Spent time on read</h2>
                </div>
            </div>

        </div>
    );
};

export default Blogs;