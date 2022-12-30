import * as S from './AuthModal.styled'
import { FaGoogle, FaApple, FaMicrosoft } from "react-icons/fa";

const AuthModal = ({type}) => {
    var  OutputPackage;
    if(type==='register'){
        OutputPackage = {
            title: 'Register', desc: 'Create An Account and Start Fixing'
        }
    }
    if(type==='login'){
        OutputPackage = {
            title: 'Login', desc: 'Get Back to Where You Left'
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
                    <div className="mainform">
                        {
                            (type==='register')
                                ? (
                                    <div className="username outer">
                                        <label htmlFor="usernameInput">Username</label>
                                        <input type="text" placeholder='Username' id='usernameInput'/>
                                    </div>
                                )
                                : null
                        }
                        <div className="email outer">
                            <label htmlFor="emailInput">Email</label>
                            <input type="text" placeholder='Email' id='emailInput'/>
                        </div>
                        <div className="password outer">
                            <label htmlFor="passwordInput">Password</label>
                            <input type="text" placeholder='Password' id='passwordInput'/>
                        </div>
                        <div className="submit">
                            <button type="submit" className='center box-shadow-01'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </S.AuthModalContainer>
    );
}

export default AuthModal;