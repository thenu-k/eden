import * as S from './PageFormat.styled'

const PageFormat = ({children}) => {
    return (
        <S.PageFormatContainer>
            {children}
        </S.PageFormatContainer>
    );
}

export default PageFormat;