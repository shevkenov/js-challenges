import React from 'react';
import { useDispatch } from 'react-redux';
import { Container, Input, LoginContainer, Title } from './style';
import Button from '../Button/Button';
import { authLogin } from '../../store/authReducer';

const Login = () => {
  const dispatch = useDispatch();

  const userRef = React.useRef();
  const passRef = React.useRef();

  const handleLogin = () => {
    dispatch(authLogin({username: userRef.current.value, password: passRef.current.value}))
  }

  return (
    <Container>
        <LoginContainer>
            <Title>Login</Title>
            <Input ref={userRef} placeholder='Login name'/>
            <Input ref={passRef} placeholder='Passoword'/>
            <Button width="100%" onClick={handleLogin}>Login</Button>
        </LoginContainer>
    </Container>
  )
}

export default Login