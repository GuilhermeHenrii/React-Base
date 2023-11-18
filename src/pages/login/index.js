import React from 'react';
import { toast } from 'react-toastify'; // chamando o toast para emitir de fato as nossas notificações
import { Title, Paragraph } from './styled';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';

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

  React.useEffect(() => {
    // Hook
    // sempre que o modulo for chamado, isso é executado
    // substitui o componentDidMount()
    // retorna uma promisse mas o React não permite que a arrow function acima seja async
    // por isso devemos chamar outra função para isso

    async function getData() {
      const promisse = await axios.get('/alunos');
      console.log(promisse.data[0]);
    }

    getData();
  }, []);

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
