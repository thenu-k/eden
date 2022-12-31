import Link from 'next/link';
import * as S from './Landing.styled'

const Landing = () => {
    return (
        <S.LandingContainer className='center' id='Landing'>
            <div className="landing inner">
                <div className="text box-shadow-023">
                    <h1>All <span>Your Notes</span> <br/> In One Place</h1>
                    {/* <p>Got an idea? Jot it down here and let it flourish. <br/> Create an account or continue as a guest.</p> */}
                    <div className="links center">
                        <Link href='/dashboard/dashboard' className='center colored box-shadow-02'>Dashboard</Link>
                        <Link href='https://github.com/thenu-k/eden' target={'_blank'} className='center box-shadow-02'>Github</Link>
                    </div>
                </div>
            </div>
        </S.LandingContainer>
    );
}

export default Landing;