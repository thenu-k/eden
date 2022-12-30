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
                    <div className="intro outer">
                        <p>
                            Seriously. Tell me to hard code a web application and I'll do it any day.<br/> But tell me to get the content right and I've got a bigger writer's block than George R R Martin.
                        </p>
                    </div>
                    <ul className="links outer">
                        <Link href='/dashboard'  className='center'>Dashboard</Link>
                        <Link href='http://github.com/thenu-k/eden' className='none center' target={'_blank'}>Github</Link>
                    </ul>
                </div>
            </div>
        </S.HomeContainer>
    );
}

export default HomePage;