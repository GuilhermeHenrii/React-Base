import React from 'react';
import { toast } from 'react-toastify'; // chamando o toast para emitir de fato as nossas notificações
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  toast.success('Mensagem aleatória de teste', {
    // objeto de confguração das notificações
    closeButton: true,
    closeOnClick: false,
  });

  toast.error('Um erro foi gerado!', {
    closeButton: true,
    closeOnClick: false,
  });

  return (
    <Container>
      <Title>
        Login
        <small>Oieeee</small>
      </Title>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Paragraph>
      <button type="button">Clique aqui</button>
    </Container> // React.Fragment' }
  );
}
