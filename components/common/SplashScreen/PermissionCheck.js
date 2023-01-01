import * as S from './PermissionCheck.styled'

const PermissionCheck = () => {
    return (
        <S.PermissionCheckContainer id='PermissionCheck' className='center'>
        <div className="inner">
            <div class="gooey">
                <span class="dot"></span>
                <div class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        </S.PermissionCheckContainer>
    );
}

export default PermissionCheck;