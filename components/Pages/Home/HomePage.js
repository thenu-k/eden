import Link from 'next/link';
import * as S from './HomePage.styled'
import {FaFingerprint,FaFilter,FaGalacticRepublic, FaRedhat, FaRenren, FaStumbleuponCircle} from 'react-icons/fa'

const HomePage = () => {
    const facts = ['sdf','asdf']
    return (
        <S.HomeContainer id='HomePage' className='center'>
            <div className="homepage inner">
                <div className="text center">
                    <h2>
                        I've Got <p>No Idea</p><br/>What To Write Here.
                    </h2>
                    <div className="intro outer">
                        <p>
                            But You Might. With Eden You Can Store All Your Thoughts With A Single Click. Seriously Though - I've Got A Bigger Writer's Block Than George R R Martin.
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