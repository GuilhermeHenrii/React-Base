import { createStore } from 'redux';

const initialState = {
  // estado inicial
  clickedBtn: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CLICKED_BTN': {
      const newState = { ...state }; // o state é imutável, e por isso devemos fazer uma cópia
      newState.clickedBtn = !newState.clickedBtn; // se for true sera false e se for false será true
      return newState;
    }
    default: {
      return state; // um reducer SEMPRE deve retornar um state
    }
  }
}

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // config para rodar o store na extensão do redux no navegador
);
