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
                            Seriously. Tell me to hard code a web application and I'll do it any day.<br/> But tell me to get the content right and I've got a bigger writer's block than George R R Martin.
                        </p>
                    </div>
                    <ul className="links outer">
                        <Link href='/dashboard'  className='center'>Dashboard</Link>
                        <Link href='http://github.com/thenu-k/eden' className='none center' target={'_blank'}>Github</Link>
                    </ul>
                </div>
                <div className="facts outer center box-shadow-02">
                    <div className="inner">
                        <div className="factElement">
                            <div className="iconContainer">
                                <FaFingerprint size={40} color={'black'}/>
                            </div>
                            <p>This Is A Note Taking Application By The Way</p>
                        </div>
                        <div className="factElement">
                            <div className="iconContainer">
                                <FaFilter size={40} color={'black'}/>
                            </div>
                            <p>So Basically You Think Of An Idea And You Write It Here</p>
                        </div>
                        <div className="factElement">
                            <div className="iconContainer">
                                <FaGalacticRepublic size={40} color={'black'}/>
                            </div>
                            <p>Pay No heed To These Icons On The Left</p>
                        </div>
                        <div className="factElement">
                            <div className="iconContainer">
                                <FaRedhat size={40} color={'black'}/>
                            </div>
                            <p>They're Just Icons I Thought Were Cool</p>
                        </div>
                        <div className="factElement">
                            <div className="iconContainer">
                                <FaRenren size={40} color={'black'}/>
                            </div>
                            <p>Anyways Have Fun With The Website</p>
                        </div>
                        <div className="factElement">
                            <div className="iconContainer">
                                <FaStumbleuponCircle size={40} color={'black'}/>
                            </div>
                            <p>Not Entirely Sure What To Write Here</p>
                        </div>
                    </div>
                </div>
            </div>
        </S.HomeContainer>
    );
}

export default HomePage;