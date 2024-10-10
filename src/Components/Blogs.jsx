import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Bookmark from "./Bookmark";



const Blogs = () => {
    const [blog, setBlog] = useState([]);
    const [bookmark,setBookmark] = useState([]);
    const [spent_time,setSpentTime] = useState(0);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlog(data));
    }, []);


    const handle_bookmark = (id)=>{
         

         for(let i of blog){
             if(i.id === id){
                const newData = [...bookmark,i];
                 setBookmark(newData);
             }
         }
        
    }


    const  handle_spentTime =(id)=>{
        for(let i of blog){
            if(i.id === id){
               let newTime =spent_time + parseInt(i.reading_time) ;
                setSpentTime(newTime)
            }
        }
    }
    

    return (
        <div>
            
            <div className="grid grid-cols-12 gap-4 mb-8 mt-4">
                <div className="col-span-9">
                    {
                        blog.map(bg_data => <Blog blog={bg_data} handle_spentTime={handle_spentTime} handle_bookmark={handle_bookmark} key={bg_data.id}></Blog>)
                    }
                    
                </div>
                <div className="col-span-3">
                     <div className="spent_time border-2 text-center border-[#6047ec] bg-[#6047ec1a] rounded-lg py-3 px-2 mb-4">
                          <h2 className="text-[1.2rem] font-bold text-[#6047ec]">Spent time on read : {spent_time} min</h2>
                     </div>

                   {/* bookmarked design  */}
                    
                    <div className="bg-[#1111110d] rounded-lg">
                        <h1 className="p-4 text-[1.5rem] font-bold">Bookmarked Blogs : {bookmark.length}</h1>
                         
                        <div className="p-4">

                             {
                                bookmark.map(book_mark => <Bookmark key={book_mark.id} book_mark ={book_mark}></Bookmark>)
                             }
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blogs;