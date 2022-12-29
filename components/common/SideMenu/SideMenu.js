import Filters from './Filters/Filters';
import * as S from './SideMenu.styled'
import Tags from './Tags/Tags';

const SideMenu = () => {
    return (
        <S.SideMenuContainer>
            <div className="tags outer center">
                <Tags/>
            </div>
            <div className="filters outer center">
                <Filters/>
            </div>
        </S.SideMenuContainer>
    );
}

export default SideMenu;