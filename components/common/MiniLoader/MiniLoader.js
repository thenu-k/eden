import PermissionCheck from "../SplashScreen/PermissionCheck";
import * as S from './MiniLoader.styled'

const MiniLoader = () => {
    return (
        <S.MiniLoaderContainer id='MiniLoader' className="center box-shadow-01">
        <span class="loader"></span>
        </S.MiniLoaderContainer>
    );
}

export default MiniLoader;  