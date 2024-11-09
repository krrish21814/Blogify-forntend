import { format } from "date-fns";
import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({blog}:{blog:Blog}) =>{
  const formattedDate = format(new Date(blog.createdAt), "MMMM dd, yyyy");
    return <div>
             <AppBar></AppBar>
             <div className="flex justify-center">
                <div className="grid grid-cols-12 px-20 w-full max-w-screen-2xl pt-12 ">
                    <div className="col-span-8 pl-20">
                        <div className="text-5xl font-bold">
                             {blog?.title}
                         </div>
                         <div className="pt-2 pb-3 text-slate-600 text-lg font-normal ">
                            Posted on {formattedDate}
                         </div>
                         <div className="text-2xl font-semibold">
                            {blog?.content}
                         </div>
                    </div>
                        
                          <div className="col-span-4 ">
                            <div className="text-slate-500 text-lg font-semibold">
                                Author
                            </div>
                              <div className="flex pt-2 ">
                                <div className="text-md">
                                <Avatar size={7} name={blog?.author.name?.[0] || "A"}></Avatar>
                                </div> 
                                
                                <div className="pl-2 text-lg ">
                                {blog?.author.name.charAt(0).toUpperCase() + blog.author.name.slice(1) || "Anonymous"}
                                </div>
                               
                              </div>
                         </div>
                </div>
            </div>
            </div>
}