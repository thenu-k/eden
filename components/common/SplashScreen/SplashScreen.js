import { useRef } from 'react';
import * as S from './SplashScreen.styled'  

const SplashScreen = () => {
    return (
        <S.SplashScreenContainet className='center'>
            <h1 ref={headingRef}>EDEN</h1>
        </S.SplashScreenContainet>
    );
}

export default SplashScreen;