import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../hooks"
import { FullBlog } from "../components/FullBlog";
import { AppBar } from "../components/AppBar";
import { FullBlogSkeleton } from "../components/FullBlogSkeleton";
import { useEffect } from "react";

export const Blog =()=>{
    const { id } = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });
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
           <FullBlogSkeleton/>
           <FullBlogSkeleton/>
          
        </div>
    </div>
        
    }
    if (!blog) {
      return (
        <div>
          <div className="flex justify-center flex-col">
            <p>Blog not found</p>
          </div>
        </div>
      );
    }
  
    return (
      <div>
        <FullBlog blog={blog} />
      </div>
    );
  };