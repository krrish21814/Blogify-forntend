import { Link, useNavigate } from "react-router-dom"

export const Menu = () => {
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.removeItem("token");
        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail")
        navigate("/signin");
    }
    return (
      <div className="fixed top-15 right-10 w-40 border rounded shadow-md z-50  ">
        <Link to={'/bulk/user'}>
            <div className="p-2 hover:bg-slate-200">
                My Blogs
            </div>
        </Link>
            <div onClick={logout} className="p-2 hover:bg-slate-200 cursor-pointer">
               Logout
            </div>
      </div>
    );
  };
  