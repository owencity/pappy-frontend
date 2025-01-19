import axios from "axios";
import { useState } from "react";

const StoryEditor = () => {
    const [name ,setName] = useState("");
    const [content, setContent] = useState("");
    const [imageFile, setImageFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("content", content);
        if(imageFile) formData.append("image", imageFile); 
    
        try {
            const res = await axios.post("http://localhost:8080/api/story", formData, {
                headers: {
                    "Content-Type" : "multipart/form-data"
                }
            });
            alert("스토리가 성공적으로 작성되었습니다!")
            // 작성 후 폼 초기화
            setName("");
            setContent("");
            setImageFile("");
        } catch (error) {
            console.error("Error creating story:" , error);
            alert("스토리 작성 중 문제가 발생했습니다.")
        }
    
    }

    return(
        <div className="StoryEditor">
            <h1>스토리 작성하기</h1>
            <form onSubmit={handleSubmit} className="story_editor_form">
                <div className="form_group">
                    <label htmlFor="name">제목</label>
                    <input 
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="제목을 입력하세요"
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="content">내용</label>
                    <textarea 
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용을 입력하세요"
                    rows= "5"
                    required
                    ></textarea>
                </div>
                <div className="form_group">
                    <label htmlFor="image">이미지 업로드</label>
                    <input 
                    type="file"
                    id="image"
                    onChange={(e) => setImageFile(e.target.files[0])}
                    accept="image/*"
                    />
                </div>
                <button type="submit">작성하기</button>
            </form>
        </div>
    ) 
    
}

export default StoryEditor;