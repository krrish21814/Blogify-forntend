import { SignupInput } from "@krishnagad/medium-common"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../config"
export const Auth =({type}: {type:"signup" | "signin"}) =>{
    const navigate = useNavigate();
    const [error, seterror] = useState(false);
    const [loading, setLoading] = useState(false);
    const [postInputs, setPostInputs] = useState<SignupInput>({
        email: "",
        password: "",
        name: "",
    })

   async function sendRequest(){
    try{
        setLoading(true)
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`,postInputs);
        const userName = postInputs.name || "";
        const userEmail = postInputs.email || "";
        const jwt = response.data;

        localStorage.setItem("userName",userName);
        localStorage.setItem("userEmail",userEmail);
        localStorage.setItem("token",jwt);
        
        navigate("/blogs")
        setLoading(false)
        seterror(false)
    }catch(e){
        seterror(true)  
        setLoading(false)
    }}

    return<div className="flex justify-center min-h-screen items-center ">
        <div>

            <div className=" text-4xl font-extrabold px-7 pb-2.5">
                {type==="signup"? "Create an account" : <div className=" text-4xl flex justify-center font-extrabold px-7 pb-2.5"> Signin to Blogify </div>} 
            </div>
             
            <div className="font-semibold font-normal text-slate-600 text-md flex justify-center pb-5 ">
                 {type=== "signin" ? "Don't have an account?" : "Already have an account?" }
            <Link className="pl-1.5 font-semibold font-normal underline text-slate-600 text-md " to={type==="signin"? "/signup" : "/signin"} >
            
            {type==="signin"? "Create account": "Login" }
            
            </Link>
            </div>

            {type==="signup"? <LabelledInput label="Username" placeholder="Krishna Gad" onchange={(e) =>{
                 setPostInputs({
                ...postInputs,
                      name: e.target.value
                     }) 
                    seterror(false)
                 }}>
             </LabelledInput> : null } 

             <LabelledInput label="Email" placeholder="krishna@gmail.com" onchange={(e) =>{
                 setPostInputs({
                    ...postInputs,
                    email: e.target.value
                     })
                     seterror(false)
                 }}>
             </LabelledInput>

             <LabelledInput label="Password" type={"password"} placeholder="" onchange={(e) =>{
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                     })
                     seterror(false)
                 }}>
             </LabelledInput>
            
          <div className="w-full relative">
    <button 
        onClick={sendRequest} 
        type="button" 
        className=" mt-7 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full"
    >
        {type === "signup" ? "Signup" : "Signin"}
    </button>
    
         <div>
                {error &&
                 <div className="fixed text-red-600 text-lg">
                    Incorrect Credentials        
                 </div>}
            </div>
            <div className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 pt-5">
                  {loading && (
            <div className="w-7 h-7 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>
                )}
          </div>
        </div>


            
        </div>
      
    </div>
}

interface LabelledInputType{
    label:string;
    placeholder: string;
    onchange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({label,placeholder,onchange,type}: LabelledInputType){
    return <div>
        <div>
            <div className="block mb-2 text-md font-medium text-black pt-3">{label}</div>

            <input onChange={onchange}  type={type || "text"} id="first_name" className="w-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    </div>
}