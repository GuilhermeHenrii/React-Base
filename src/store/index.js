// Aqui nesta pasta é onde ficará toda a lógica do nosso store, com os reducers, os types etc

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware(); // Criado o Saga Middleware
// const initialState = {
//   // estado inicial
//   clickedBtn: false,
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'CLICKED_BTN': {
//       const newState = { ...state }; // o state é imutável, e por isso devemos fazer uma cópia
//       newState.clickedBtn = !newState.clickedBtn; // se for true sera false e se for false será true
//       return newState;
//     }
//     default: {
//       return state; // um reducer SEMPRE deve retornar um state
//     }
//   }
// }

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware)); // store está recebendo o rootReducer e o Saga Middleware

sagaMiddleware.run(rootSaga);

export default store;
