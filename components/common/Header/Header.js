import * as S from './Header.styled'
import Link from 'next/link';

const Header = () => {
    return (
        <S.HeaderContainer className='box-shadow-00' id='Header'>
            <nav>
                <Link href='/'>Dashboard</Link>
                <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
            </nav>
        </S.HeaderContainer>
    );
}

export default Header;