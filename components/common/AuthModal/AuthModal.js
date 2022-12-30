import * as S from './Register.styled'
import { FaGoogle } from "react-icons/fa";

const AuthModal = () => {
    return (
        <S.AuthModal id='AuthModal' className='center'>
            <div className="register inner">
                <div className="text">
                    <h1>Register</h1>
                    <p>Create an account and start fixing</p>
                </div>
                <form action="" className='box-shadow-00'>
                    <div className="altRegister">
                        <FaGoogle size={40}/>
                        <button type='button' className='google'></button>
                    </div>
                </form>
            </div>
        </S.AuthModal>
    );
}

export default AuthModal;