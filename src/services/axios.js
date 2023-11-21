// configurando o axios para que todas as requisições partam do ponto final da rota da api (http://34.151.198.237)
import axios from 'axios';

export default axios.create({
  baseURL: 'http://34.151.198.237',
});
