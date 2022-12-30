import * as S from './AuthModal.styled'
import { FaGoogle, FaApple, FaMicrosoft } from "react-icons/fa";
import { useRef } from 'react';
import { registerUser, loginUser, loginGoogle } from './AuthFunctions';
import { useRouter } from 'next/router';
import { getAuth, getRedirectResult } from 'firebase/auth';


const AuthModal = ({type}) => {
    const router = useRouter()
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
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const usernameInputRef = useRef()
    const handleSubmit = async(e) => {
        e.preventDefault()
        if (type==='register' ){
            await registerUser(usernameInputRef.current.value, emailInputRef.current.value, passwordInputRef.current.value)
            router.push('/')
        }
        else{
            await loginUser(emailInputRef.current.value, passwordInputRef.current.value)
            router.push('/')
        }
    }
    const handleGoogleSubmit = async(e) => {
        await loginGoogle()
    }
    //Redirection check
    const auth = getAuth();
    getRedirectResult(auth)
    .then((result) => {
        router.push('/')
    }).catch((error) => {
        console.log(error.message)
    });
    return (
        <S.AuthModalContainer id='AuthModal' className='center'>
            <div className="authmodal inner">
                <div className="text">
                    <h1>{OutputPackage.title}</h1>
                    <p>{OutputPackage.desc}</p>
                </div>
                <form className='box-shadow-00' onSubmit={(e) => handleSubmit(e)}>
                    <div className="alt">
                        <button onClick={handleGoogleSubmit} type='button' className='google box-shadow-01'><FaGoogle size={45}/></button>
                        <button type='button' className='apple box-shadow-01'><FaApple size={45}/></button>
                        <button type='button' className='microsoft box-shadow-01'><FaMicrosoft size={45}/></button>
                    </div>
                    <div className="mainform">
                        {
                            (type==='register')
                                ? (
                                    <div className="username outer">
                                        <label htmlFor="usernameInput">Username</label>
                                        <input type="text" placeholder='Username' id='usernameInput' ref={usernameInputRef}/>
                                    </div>
                                )
                                : null
                        }
                        <div className="email outer">
                            <label htmlFor="emailInput">Email</label>
                            <input type="text" placeholder='Email' id='emailInput' ref={emailInputRef}/>
                        </div>
                        <div className="password outer">
                            <label htmlFor="passwordInput">Password</label>
                            <input type="text" placeholder='Password' id='passwordInput' ref={passwordInputRef}/>
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