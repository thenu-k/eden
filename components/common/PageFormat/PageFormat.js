import Header from '../Header/Header';
import * as S from './PageFormat.styled'

const PageFormat = ({children}) => {
    return (
        <S.PageFormatContainer>
            <Header/>
            <div className="pageFormatInner center">
                {children}
            </div>
        </S.PageFormatContainer>
    );
}

export default PageFormat;