import Link from 'next/link';
import * as S from './HomePage.styled'
import Landing from './Landing/Landing';

const HomePage = () => {
    const facts = ['sdf','asdf']
    return (
        <S.HomeContainer id='HomePage' className='center'>
            <div className="homepage inner">
                <Landing/>
            </div>
        </S.HomeContainer>
    );
}

export default HomePage;