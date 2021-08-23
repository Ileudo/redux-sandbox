import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const { inc, dec, rnd } = bindActionCreators(actions, store.dispatch);

// По нажатию на кнопку мы будем диспатчить событие, но пока мы ничего не видим, потому что
// мы ничего не делаем, когда store обновляется.

document.getElementById('inc').addEventListener('click', inc);

document.getElementById('dec').addEventListener('click', dec);

document.getElementById('rnd').addEventListener('click', () => {
  const payload = Math.floor(Math.random() * 10);
  rnd(payload);
});

// Теперь каждый раз, когда store обновляется, он будет вызывать функцию update. Ну а
// функция update в свою очередь будет вызывать обновление нашего счетчика.
const update = () => {
  document.getElementById('counter').innerHTML = store.getState();
};
store.subscribe(update);
