import { createStore } from 'redux';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;

    case 'DEC':
      return state - 1;

    case 'RND':
      return state + action.payload;

    default:
      return state;
  }
};

const store = createStore(reducer);
// По нажатию на кнопку мы будем диспатчить событие, но пока мы ничего не видим, потому что
// мы ничего не делаем, когда store обновляется.
document
  .getElementById('inc')
  .addEventListener('click', () => store.dispatch({ type: 'INC' }));

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch({ type: 'DEC' });
});

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  store.dispatch({ type: 'RND', payload });
});

// Теперь каждый раз, когда store обновляется, он будет вызывать функцию update. Ну а
// функция update в свою очередь будет вызывать обновление нашего счетчика.
const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};
store.subscribe(update);
