import { useEffect } from "react";
import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';

export const Blogs = ()=>{
    const {loading,blogs}= useBlogs();
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/signin");
      }
    }, [navigate]);
  
    if(loading){
        return<div>
         <AppBar></AppBar>
           <div  className="flex justify-center flex-col">
             <BlogSkeleton/>
             <BlogSkeleton/>
             <BlogSkeleton/>
             <BlogSkeleton/>
             <BlogSkeleton/>
        </div>
    </div>
    }


return (
  <div>
    <AppBar />
    <div className="flex justify-center">
      <div>
      {blogs.slice().reverse().map((blog) => {
          const formattedDate = format(new Date(blog.createdAt), "MMMM dd, yyyy");
          return (
            <BlogCard
              key={blog.id}
              id={blog.id}
              authorName={blog.author.name || "Anonymous"}
              title={blog.title}
              content={blog.content}
              publishedDate={formattedDate}
            />
          );
        })}
      </div>
    </div>
  </div>
);

    
}