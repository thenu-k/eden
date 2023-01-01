import { useRef } from 'react';
import * as S from './SplashScreen.styled'  

const SplashScreen = () => {
    const headingRef = useRef()
    try{
        var nAgt = navigator.userAgent;
        var verOffset;
        if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
            browserName = "Safari";
            headingRef.current.classList.add('safari')
        }
    }catch(e){
        console.log(e)
    }
    return (
        <S.SplashScreenContainet className='center'>
            <h1 ref={headingRef}>EDEN</h1>
        </S.SplashScreenContainet>
    );
}

export default SplashScreen;