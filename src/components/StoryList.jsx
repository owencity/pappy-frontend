import { useState, useEffect } from "react";
import "../css/StoryList.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StoryList = () => {
    const [stories , setStories] = useState([]);
    const nav = useNavigate();

    // 데이터 로딩
    useEffect(() => {
        axios
        .get("http://localhost:8080/story?page=1&size=20")
        .then((res) => {
            setStories(res.data);
        })
        .catch((error) => {
            console.error("Error fetching stories", error);
        });
    }, []);
   
    const handleClick = (id) => {
        nav(`/story/${id}`)
    }

    return <div className="StoryList">
        <h1>기부 후기</h1>
        <div>
        
            </div>
        <div className="story_list_container">
            {stories.map((story) => (
                <div key={story.storyId}
                
                className="story_card"
                onClick={() => handleClick(story.storyId)}>
                    <div className="story_content">
                        <h2>{story.name} </h2>
                        <span className="story_date">
                            {new Date(story.createdAt).toLocaleDateString()}
                        </span>
                        <span className="story_author"> 작성자 : "작성자" </span>
                    </div>                  
                </div>
            ))}
        </div>  
        </div>
}

export default StoryList;