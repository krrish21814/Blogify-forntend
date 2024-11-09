import axios from "axios";
import { AppBar } from "../components/AppBar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/signin");
        }
    }, [navigate]);

    const handlePublish = async () => {
        if (!title || !description) {
            setError("Title and description cannot be empty");
            return; 
        }

        try {
            setLoading(true);
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                    title,
                    content: description,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            );
            setLoading(false);
            navigate(`/blog/${response.data.id}`);
        } catch (err) {
            setLoading(false);
            setError("Failed to publish the blog. Please try again.");
        }
    };

    return (
        <div>
            <AppBar></AppBar>
            <div className="flex justify-center">
                <div className="pt-20 mb-6 max-w-screen-lg w-full">
                    <input
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setError("");
                        }}
                        type="text"
                        placeholder="Title"
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-100 text-xl focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>
            </div>

            <TextArea
                onChange={(e) => {
                    setDescription(e.target.value);
                    setError("");
                }}
            ></TextArea>

<div className="flex justify-between items-center w-full px-[295px] pt-3">
    {/* Button aligned to the left with some space from the left edge */}
    <div className="flex">
        <button
            onClick={handlePublish}
            className="px-6 py-3.5 text-sm font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200"
        >
            Publish post
        </button>
        
        <div className="pt-2 pl-2">
                   {loading && 
                   <div className="w-8 h-8 border-4 border-t-transparent border-gray-300 rounded-full animate-spin"></div>}
                </div>
    </div>

    {/* Error message aligned to the right with some space from the right edge */}
    <div className="text-right">
        {error && (
            <div className="text-red-600 text-lg">
                {error}
            </div>
        )}
    </div>
</div>

  </div>
    );
};

function TextArea({ onChange }: { onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void }) {
    return (
        <div className="flex justify-center">
            <div className="py-2 bg-white rounded-b-lg max-w-screen-lg w-full">
                <textarea
                    onChange={onChange}
                    rows={9}
                    cols={50}
                    className="border border-gray-300 rounded-lg bg-gray-100 block w-full p-2 text-lg text-gray-800 resize-none"
                    placeholder="Write a blog..."
                    required
                ></textarea>
            </div>
        </div>
    );
}

export default TextArea;
