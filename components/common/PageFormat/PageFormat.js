import * as S from './PageFormat.styled'

const PageFormat = ({children}) => {
    return (
        <S.PageFormatContainer>
            <div className="pageFormatInner center">
                {children}
            </div>
        </S.PageFormatContainer>
    );
}

export default PageFormat;