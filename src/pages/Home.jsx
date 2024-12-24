import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
    const nav = useNavigate();
    
    return (
        <div>
            Home입니다.
            <Button onClick={() => nav("/signUpTerm")}
                text={"회원가입하기"}/>    
            </div>
    )
}

export default Home;