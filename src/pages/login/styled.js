import styled from 'styled-components';

export const Title = styled.h1`
  color: ${(props) =>
    props.isRed
      ? 'red'
      : 'blue'}; // se a propriedade isRed for true retorna a cor red, se não, a cor azul

  small {
    font-size: 50px;
  }
`;

export const Button = styled.button`
  background-color: green;
  color: black;
  width: 70px;
  height: 50px;
`;
