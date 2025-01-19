import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import "../css/SignUp.css"

const SignUp = () => {

    const nav = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        phone: "",
        gender: "male",
        role : "USER"
    })

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name] : value,
        }))
    }

    const handleSingUp = async () => {

        if(formData.email || !formData.password || !formData.name || !formData.phone) {
            alert("모든 필드를 입력해주세요");
        }

        if(formData.password !== formData.confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        try {
            const res = await axios.post("http://localhost:8080/api/signup", formData, {
                headers: {
                    "content-Type" : "application/json", // 명시적 json 형식지정
                },
            });
            if(res.status === 201) {
                alert("회원가입 성공!");
                nav("/Home"); // 성공시 홈으로
            }
        } catch (error) {
            console.error("회원가입 실패", error);
            alert("회원가입 중 오류가 발생하였습니다.")
        }
    }

  return (
    <div className="SignUp">
        <h1>회원가입</h1>   
    <div className="SignUp_content">
        <div>
            <input 
            type="email" 
            name="email"
            placeholder="아이디(이메일)"
            value={formData.email}
            onChange={handleChange}
            />
        </div>
        <div>
            <input 
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            />    
        </div>         
        <div>
            <input
            type="password" 
            name="confirmPassword"
            placeholder="비밀번호 확인"
            value={formData.confirmPassword}
            onChange={handleChange}
            />    
        </div>  
        <div>
            <input 
            type="text" 
            name="name"
            placeholder="이름"
            value={formData.name}
            onChange={handleChange}
            />
        </div>
        <div>
            <input 
            type="text" 
            name="phone"
            value={formData.phone}
            placeholder="휴대폰 번호"
            />
        </div>
        <div>
            <label htmlFor="">
                <input 
                type="radio" 
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
                />남
            </label>
            <label htmlFor="">
                <input 
                type="radio" 
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
                />여
            </label>
        </div>
        <Button onClick={handleSingUp} text={"가입하기"}/>
        </div>
    </div>
  )
  
};

export default SignUp;
