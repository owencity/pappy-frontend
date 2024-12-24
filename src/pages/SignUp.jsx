import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";


const SignUp = () => {

    const nav = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        phone: "",
    })

    const handleSingUp = async () => {
        try {
            const res = await axios.post("http://localhost:8080/api/signup", formData);
            if(res.status === 201) {
                alert("회원가입 성공!");
                nav("/Home"); // 성공시 홈으로
            }
        } catch (error) {
            console.error("회원가입 실패", error);
            alert("회원가입 중 오류가 발생하였습니다.")
        }
    }

  return <div className="signUp-content">
    <div>
        <input type="email" placeholder="아이디(이메일)"/>
    </div>
    <div>
        <input type="password" placeholder="비밀번호" />    
    </div>         
    <div>
        <input type="password" placeholder="비밀번호 확인" />    
    </div>  
    <div>
        <input type="text" placeholder="이름" />
    </div>
    <div>
        <input type="text" placeholder="휴대폰 번호"/>
    </div>
    

    <Button onClick={handleSingUp} text={"가입하기"}/>
    </div>;
};

export default SignUp;
