import React from 'react';
import { Title, Button } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oieeee</small>
      </Title>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <Title>Teste</Title>

      <Button>Clique aqui</Button>

      <a href="teste">Oiee</a>
    </Container> // React.Fragment
  );
}
