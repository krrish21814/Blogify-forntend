import { Link } from "react-router-dom";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    id: number
    
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}: BlogCardProps) => {
    return <Link to={`/blog/${id}`}>  <div className="min-w-full border-b-2 pb-3 p-4 w-screen max-w-screen-lg cursor-pointer">

            <div className="flex">
             <Avatar name={authorName}></Avatar> 
            <div/>
           
            <div className="pl-2 text-lg ">
            {authorName.charAt(0).toUpperCase() + authorName.slice(1)} 
            </div>
            <div className="flex justify-center flex-col pl-2 pt-1">
            <div className="w-1 h-1 bg-slate-500 rounded-full ">
            </div>
            </div>

            <div className="pl-2 text-slate-400 font-light text-md flex justify-center flex-col" >
            {publishedDate}
            </div>

        </div>
        <div className="font-bold pt-3  text-2xl">
            {title}
        </div>
        <div className=" pt-1 text-lg">
            {content.length>100 ? content.slice(0,100)+ "...": content}
        </div>
        <div className="text-slate-400 pt-2 text-md font-light">
            {`${Math.ceil(content.length / 1000)} min read`}
        </div>
    </div>
    </Link>
}


export function Avatar({ name, size = 7 , onClick, }: { name: string; size?: number; onClick?: () => void; }) {
    return (
        <div onClick={onClick}
            className={`relative inline-flex items-center justify-center 
                        w-${size} h-${size} overflow-hidden bg-gray-100 
                        rounded-full bg-slate-600`}
        >
            <span className="font-medium text-gray-600 dark:text-gray-300">
                {name[0].toUpperCase()}
            </span>
        </div>
    );
}
