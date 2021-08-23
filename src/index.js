import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);

const { inc, dec, rnd } = bindActionCreators(actions, store.dispatch);

// По нажатию на кнопку мы будем диспатчить событие, но пока мы ничего не видим, потому что
// мы ничего не делаем, когда store обновляется.

// Теперь каждый раз, когда store обновляется, он будет вызывать функцию update. Ну а
// функция update в свою очередь будет вызывать обновление нашего счетчика.
const update = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      onInc={inc}
      onDec={dec}
      onRnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }}
    />,
    document.getElementById('root')
  );
};

update();
store.subscribe(update);
