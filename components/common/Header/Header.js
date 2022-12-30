import * as S from './Header.styled'
import Link from 'next/link';
import {getAuth, signOut} from 'firebase/auth'

const Header = () => {
    const auth = getAuth()
    const logOut = async () => {
        console.log('Signing out')
        // await signOut(auth)
        // There's no need to redirect as it is done by the auth wrapper
    }
    return (
        <S.HeaderContainer className='box-shadow-00' id='Header'>
            <nav>
                <Link href='/'>Dashboard</Link>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
                <button onClick={() => logOut()}>Logout</button>
            </nav>
        </S.HeaderContainer>
    );
}

export default Header;