// Neste aquivos serão armazenado todos os reducers da aplicação

const initialState = {
  // estado inicial
  clickedBtn: false,
};

export default function reducer(state = initialState, action) {
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
