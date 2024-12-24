import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import '../css/SignUpTerm.css'

const SignUpTerm = () => {

    const nav = useNavigate();

    return (
        <>
        <div className="main__content">
            <h3>
            "환영합니다! "
            <br />
            PAPPY!에 가입하시려면 약관에 동의해 주세요.
            </h3>
            <div className="membership__checkbox">
                <div>
                    <label htmlFor="terms-agree">
                        <input type="checkbox" id="terms-agree" /> 약관 전체 동의하기(선택 동의 포함)
                    </label>
                </div>
                <div>
                    <label htmlFor="over14-agree">
                        <input type="checkbox" id="over14-agree" /> 만 14세 이상입니다.
                    </label>
                </div>
                <div>
                    <label htmlFor="marketing-agree">
                        <input type="checkbox" id="marketing-agree" /> 마케팅 목적의 개인정보 수집 및 이용 동의해
                    </label>
                </div>
                <div>
                    <label htmlFor="privacy-agree">
                        <input type="checkbox" id="privacy-agree" /> 광고성 정보 수신 동의(선택)
                    </label>
                </div>
            </div>
            <div>정보주체의 개인정보 및 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여 안전하게 관리하고 있습니다.
            자세한 사항은 개인정보처리방침에서 확인할 수 있습니다.</div>
        </div>
        <Button onClick={() => nav("/SignUp")} text={"동의하고 회원가입하기"} />
        </>
    )
}

export default SignUpTerm;