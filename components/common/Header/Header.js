import * as S from './Header.styled'
import Link from 'next/link';
import {getAuth, signOut} from 'firebase/auth'
import { useAuth } from '../../auth/authContext';

const Header = () => {
    const {user} = useAuth()
    const auth = getAuth()
    const logOut = async() => {
        signOut(auth).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log
        })
    }
    return (
        <S.HeaderContainer className='box-shadow-02 center' id='Header'>
            <div className="header inner">
                <h1><Link href='/'>EDEN</Link></h1>
                <nav>
                    <ul>
                        <li><Link href='/dashboard/dashboard'>Dashboard</Link></li>
                        {
                            (user!=null)
                                ?   <li><button onClick={logOut}>Sign Out</button></li>
                                :   <><li><Link href='/login'>Login</Link></li><li><Link href='/register'>Register</Link></li></>
                        }
                    </ul>
                </nav>
            </div>
        </S.HeaderContainer>
    );
}

export default Header;