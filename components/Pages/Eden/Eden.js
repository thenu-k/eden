import SideMenu from '../../common/SideMenu/SideMenu';
import * as S from './Eden.styled'
import MenuBar from './MenuBar/MenuBar';

const Eden = () => {
    return (
        <S.EdenContainer className='center' id='Eden'>
            <div className="eden inner">
                <MenuBar/>
            </div>
        </S.EdenContainer>
    );
}

export default Eden;