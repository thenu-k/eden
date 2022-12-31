import * as S from './Facts.styled'
import {FaFingerprint,FaFilter,FaGalacticRepublic, FaRedhat, FaRenren, FaStumbleuponCircle} from 'react-icons/fa'

const Facts = () => {
    return (
        <S.FactsContainer className="facts outer center box-shadow-02">
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
        </S.FactsContainer>
    );
}

export default Facts;