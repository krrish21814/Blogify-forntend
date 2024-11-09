
export const BlogSkeleton = () =>{
    return(<div className="flex justify-center ">
         <div className="min-w-48 border-b-2 pb-3 p-4 w-screen max-w-screen-lg ">

             <div className="flex">
                <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4 "></div>
             <div/>
       
             <div className="pl-2 text-lg ">
             <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4 "></div>
             </div>

              <div className="pl-2 text-slate-400 font-light text-md flex justify-center flex-col" >
                <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
             </div>

    </div>
         <div className="font-bold pt-3  text-2xl">
              <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
         </div>
         <div className=" pt-1 text-lg">
            <div className="h-2 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
         </div>
         <div className="text-slate-400 pt-2 text-md font-light">
             <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
         </div>
    </div>        
         <span className="sr-only">Loading...</span>
 </div>
    )  
}