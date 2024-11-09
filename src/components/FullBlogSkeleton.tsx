
export const FullBlogSkeleton = ( )=> {
 return <div className="flex justify-center">
 <div className="grid grid-cols-12 px-20 w-full max-w-screen-2xl pt-12 ">
     <div className="col-span-8 pl-20">
         <div className="text-5xl font-bold">
              <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4 "></div>
          </div>
          <div className="pt-2 pb-3 text-slate-600 text-lg font-normal ">
             <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
          </div>
          <div className="text-2xl font-semibold">
             <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4 "></div>
          </div>
     </div>
         
     <div className="col-span-4 ">
          <div className="text-slate-500 text-lg font-semibold">
             <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4 "></div>
          </div>
          <div className="flex pt-2 ">
              <div className="text-md">
                 <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4 "></div>
             </div> 
                 
          <div className="pl-2 text-lg">
                 <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
             </div>
         </div>
     </div>
 </div>
</div>
} 