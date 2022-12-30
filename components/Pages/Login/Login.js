import * as S from './Login.styled'
import AuthModal from '../../common/AuthModal/AuthModal';

const Login = () => {
    return (
        <S.LoginContainer id='Login' className='center'>
            <AuthModal type={'login'}/>
        </S.LoginContainer>
    );
}

export default Login;