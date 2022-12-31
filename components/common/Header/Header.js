import * as S from './Header.styled'
import Link from 'next/link';
import {getAuth, signOut} from 'firebase/auth'
import { useAuth } from '../../auth/authContext';

const Header = () => {
    return (
        <S.HeaderContainer className='box-shadow-02 center' id='Header'>
            <div className="header inner">
                <h1><Link href='/'>EDEN</Link></h1>
                <nav>
                    <ul>
                        <li><Link href='/dashboard/dashboard'>Dashboard</Link></li>
                        <li><Link href='/login'>Login</Link></li>
                        <li><Link href='/register'>Register</Link></li>
                    </ul>
                </nav>
            </div>
        </S.HeaderContainer>
    );
}

export default Header;