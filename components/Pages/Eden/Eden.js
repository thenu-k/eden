import SideMenu from '../../common/SideMenu/SideMenu';
import * as S from './Eden.styled'

const Eden = () => {
    return (
        <S.EdenContainer>
            <section className="sideSection">
                <SideMenu/>
            </section>
        </S.EdenContainer>
    );
}

export default Eden;