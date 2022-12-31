import * as S from './PermissionCheck.styled'

const PermissionCheck = () => {
    return (
        <S.PermissionCheckContainer id='PermissionCheck' className='center'>
            <div className="inner">
                Authorizing...
            </div>
        </S.PermissionCheckContainer>
    );
}

export default PermissionCheck;