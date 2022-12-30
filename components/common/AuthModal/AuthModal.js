import * as S from './AuthModal.styled'
import { FaGoogle, FaApple, FaMicrosoft } from "react-icons/fa";

const AuthModal = ({type}) => {
    var  OutputPackage;
    if(type==='register'){
        OutputPackage = {
            title: 'Register', desc: 'Create an account and start fixing'
        }
    }
    return (
        <S.AuthModalContainer id='AuthModal' className='center'>
            <div className="authmodal inner">
                <div className="text">
                    <h1>{OutputPackage.title}</h1>
                    <p>{OutputPackage.desc}</p>
                </div>
                <form action="" className='box-shadow-00'>
                    <div className="alt">
                        <button type='button' className='google box-shadow-01'><FaGoogle size={45}/></button>
                        <button type='button' className='apple box-shadow-01'><FaApple size={45}/></button>
                        <button type='button' className='microsoft box-shadow-01'><FaMicrosoft size={45}/></button>
                    </div>
                </form>
            </div>
        </S.AuthModalContainer>
    );
}

export default AuthModal;