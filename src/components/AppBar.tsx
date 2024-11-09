import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
import { useState } from "react"
import { Menu } from "./Menu";


export const AppBar =()=>{

     const [menu, setMenu] = useState(false);
     const userName = localStorage.getItem("userName");
     const UserEmail = localStorage.getItem("userEmail")
     const handelAvatarClick = () =>{
          setMenu(!menu);
     }

    return <div>

     <div className="relative border-b border-slate-300 flex justify-between px-10 p-2 ">
               <Link to={'/blogs'} className="flex justify-center flex-col">
                    <div className="text-2xl font-medium cursor-pointer ">
                             Blogify
                     </div>
              </Link>
          
              <div className="flex ">
                <Link to={'/publish'}>
                     <div className="pt-0.5">
                          <button type="button" className=" focus:outline-none text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-3xl text-sm px-4 py-2 me-2 mb-2">New Blog</button>
                     </div>
                </Link>

             <div className="pl-3 cursor-pointer">
                <Avatar onClick={handelAvatarClick} name={userName || UserEmail || "" } size={10}/>
             </div>
          </div>
    </div>
    <div >
          {menu && <Menu></Menu>}
     </div>
    </div>
}