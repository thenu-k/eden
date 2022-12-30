import * as S from './Register.styled'
import { FaGoogle } from "react-icons/fa";
import AuthModal from '../../common/AuthModal/AuthModal';

const Register = () => {
    return (
        <S.RegisterContainer id='Register' className='center'>
            <AuthModal/>
        </S.RegisterContainer>
    );
}

export default Register;