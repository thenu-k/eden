import * as S from './AuthModal.styled'
import { FaGoogle, FaApple, FaMicrosoft } from "react-icons/fa";
import { useRef, useState } from 'react';
import { loginGoogle } from './AuthFunctions';
import { useRouter } from 'next/router';
import { createUserWithEmailAndPassword, getAuth, getRedirectResult, signInWithEmailAndPassword } from 'firebase/auth';


const AuthModal = ({type}) => {
    const router = useRouter()
    var  OutputPackage;
    const [errorMessage, setErrorMessage] = useState(null)
    if(type==='register'){
        OutputPackage = {
            title: 'REGISTER', desc: 'Create an Account and Get Started'
        }
    }
    if(type==='login'){
        OutputPackage = {
            title: 'LOGIN', desc: 'Continue Where You Left Off'
        }
    }
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const usernameInputRef = useRef()
    const handleSubmit = async(e) => {
        e.preventDefault()
        const email = emailInputRef.current.value
        const password = passwordInputRef.current.value
        if (type==='register' ){
            const username = usernameInputRef.current.value
            const auth = getAuth();
            try{
                //Looks like we don't need to send the firebase config file 
                await createUserWithEmailAndPassword(auth, email, password, username)
                router.push('/dashboard')
            } catch (err){
                setErrorMessage(err.message)
            }
        }
        else{
            const auth = getAuth();
            try{
                await signInWithEmailAndPassword(auth, email, password)
                router.push('/dashboard')
            } catch (err){
                setErrorMessage(err.message)
            }
        }   
    }
    const handleGoogleSubmit = async(e) => {
        await loginGoogle()
    }
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
                            (errorMessage!=null)
                                ?  <p className='errorMessage outer'>{errorMessage}</p>
                                : null
                        }
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