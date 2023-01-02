import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { guestDetails } from '../../../../firebase/firebase';
import MiniLoader from '../../../common/MiniLoader/MiniLoader';
import * as S from './Landing.styled'

const Landing = () => {
    const auth = getAuth()
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const guestLogin = async() => {
        setLoading(true)
        try{
            await signInWithEmailAndPassword(auth, guestDetails.email, guestDetails.password)
            router.push('/notebook')
        } catch (err){
            console.log(err)
        }
        setTimeout(()=> {
            setLoading(false)
        }, 1000)
    }
    return (
        <S.LandingContainer className='center' id='Landing'>
            <div className="landing inner">
                <div className="text box-shadow-023">
                    <h1>All <span>Your Notes</span> <br/> In One Place</h1>
                    {/* <p>Got an idea? Jot it down here and let it flourish. <br/> Create an account or continue as a guest.</p> */}
                    <div className="links center">
                        <Link href='/notebook' className='center colored centerButtons'>Notebook</Link>
                        <button onClick={guestLogin} className='center centerButtons'>Guest</button>
                    </div>
                </div>
            </div>
            {
                (loading)
                    ? <MiniLoader/>
                    : null
            }
        </S.LandingContainer>
    );
}

export default Landing;