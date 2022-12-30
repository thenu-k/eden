import * as S from './Header.styled'
import Link from 'next/link';
import {getAuth, signOut} from 'firebase/auth'
import { useAuth } from '../../auth/authContext';

const Header = () => {
    return (
        <S.HeaderContainer className='box-shadow-00' id='Header'>
            <nav>
                <Link href='/'>Dashboard</Link>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
                <button onClick={null}>Logout</button>
            </nav>
        </S.HeaderContainer>
    );
}

export default Header;