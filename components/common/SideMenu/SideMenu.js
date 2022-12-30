import Filters from './Filters/Filters';
import * as S from './SideMenu.styled'
import Tags from './Tags/Tags';

const SideMenu = () => {
    return (
        <S.SideMenuContainer id='SideMenu'>
            <div className="tags outer center">
                <Tags/>
            </div>
            <div className="filters outer center">
                <Filters/>
            </div>
            <div className="new outer center">
                <button>Create Issue</button>
            </div>
        </S.SideMenuContainer>
    );
}

export default SideMenu;