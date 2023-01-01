import * as S from './PermissionCheck.styled'

const PermissionCheck = () => {
    return (
        <S.PermissionCheckContainer id='PermissionCheck' className='center'>
        <div className="inner center">
        <span class="loader"></span>
        </div>
        </S.PermissionCheckContainer>
    );
}

export default PermissionCheck;