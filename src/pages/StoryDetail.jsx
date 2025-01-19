import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

const StoryDetail = () => {

    const nav = useNavigate();

   const { id } = useParams();
   const [story , setStory] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

    useEffect(() => {
        if(id) {
            // ID 있을경우에만 요청
            axios
            .get(`http://localhost:8080/story/${id}`)
            .then((res) => {
                setStory(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching story", error);
                setError(error);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading story: {error.message}</p>;
    return (
        <div>
            <h1>{story.name}</h1>
            <p>{story.content}</p>
             {/* 댓글 섹션 */}
             <div>
                <h2>댓글</h2>
                <ul>
                    {story.comments && story.comments.length > 0 ? (
                        story.comments.map((comment, index) => (
                            <li key={index}>
                                <p>내용: {comment.comment}</p>
                            </li>
                        ))
                    ) : (
                        <p>댓글이 없습니다.</p>
                    )}
                </ul>
            </div>
            <span>{new Date(story.createdAt).toLocaleDateString()}</span>
            <div className="Button">
            <button onClick={() => nav(-1)}>뒤로가기</button>
            </div>
            
        </div>
    )
}

export default StoryDetail;