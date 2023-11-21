// arquivo para separar as acitions da aplicação

import * as types from '../types'; // chamando os arquivos onde estão todas as types

export function clickedBtn() {
  return { type: types.CLICKED_BTN };
}
