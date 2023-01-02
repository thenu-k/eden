import * as S from './Header.styled'
import Link from 'next/link';
import {getAuth, signOut} from 'firebase/auth'
import { useAuth } from '../../auth/authContext';
import { FaBars } from "react-icons/fa";
import { useRef } from 'react';

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
    const sideMenuRef = useRef()
    const toggleMenu = () => {
        sideMenuRef.current.classList.toggle('on')
    }
    const turnOffMenu = () => {
        sideMenuRef.current.classList.remove('on')
    }
    return (
        <S.HeaderContainer className='box-shadow-02 center' id='Header'>
            <div className="header inner">
                <h1><Link href='/'>EDEN</Link></h1>
                <nav className='normal'>
                    <ul>
                        <li><Link href='/notebook'>Notebook</Link></li>
                        {
                            (user!=null)
                                ?   <li><button onClick={logOut} className=''>Sign Out</button></li>
                                :   <><li><Link href='/login'>Login</Link></li><li><Link href='/register' className='blue'>Join</Link></li></>
                        }
                    </ul>
                </nav>
                <div className="menuIcon" onClick={toggleMenu}>
                    <FaBars color='black' size={22}/>
                </div>
            </div>
            <div className="sideMenu box-shadow-01" ref={sideMenuRef}>
                <div className="transparent" onClick={turnOffMenu}></div>
                <div className="sideMenu inner">
                    <div className="closeIcon"></div>
                    <nav className='normal'>
                        <ul>
                            <li><Link href='/notebook'>Notebook</Link></li>
                            {
                                (user!=null)
                                    ?   <li><button onClick={logOut} className=''>Sign Out</button></li>
                                    :   <><li><Link href='/login'>Login</Link></li><li><Link href='/register' className='blue'>Join</Link></li></>
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </S.HeaderContainer>
    );
}

export default Header;