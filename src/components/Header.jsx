import { useState, useEffect } from "react";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const nav = useNavigate(); 
    
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);

    const toggleDropDown = () => {
        setIsDropDownVisible(!isDropDownVisible)
    }

    const handleClickOutside = (event) => {
        // 드롭다운이 열려 있고 클릭한 대상이 드롭다운 내부가 아닐 경우
        if (isDropDownVisible && !event.target.closest(".header_right_end") && !event.target.closest(".dropdown_menu")) {
            setIsDropDownVisible(false);
        }
    };

     // 이벤트 리스너 등록 및 제거
     useEffect(() => {
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isDropDownVisible]);


    return (
            <header className="Header">
            <div className="header_left">
                <img src='src/assets/logo.jpg' onClick={() => nav("/")}/>
            </div>
            <div className="header_center">봉사 기부 캠페인 PAPPY</div>
            <div className="header_right">
                <div className="header_right_start" >캠페인 정보</div>
                <div className="header_right_center" onClick={() => nav("/story")}>기부 및 봉사 후기</div>
                <div className="header_right_end" >
                    <img src="src/assets/member_logo.jpg" alt="member" onClick={toggleDropDown} />
                </div>
                {
                    isDropDownVisible && (
                        <div className="dropdown_menu">
                            <button >로그인</button>
                            <button onClick={() => nav("/signUpTerm")}
                text={"회원가입하기"}>회원가입</button>
                        </div>
                    )
                }
            </div>
            </header>
    )   
    
}

export default Header;