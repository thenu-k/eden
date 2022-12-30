import Link from 'next/link';
import * as S from './HomePage.styled'

const HomePage = () => {
    return (
        <S.HomeContainer id='HomePage' className='center'>
            <div className="homepage inner">
                <div className="text center">
                    <h2>
                        I've Got <p>No Idea</p><br/>What To Write Here.
                    </h2>
                    <ul className="links outer">
                        <Link href='/dashboard'  className='box-shadow-02'>Dashboard</Link>
                        <Link href='/dashboard' className='none box-shadow-02'>Learn More</Link>
                    </ul>
                </div>
            </div>
        </S.HomeContainer>
    );
}

export default HomePage;