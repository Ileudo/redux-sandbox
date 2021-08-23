import React from 'react';

const Counter = ({ counter, onInc, onDec, onRnd }) => {
  return (
    <div className="jumbotron">
      <h2>{counter}</h2>
      <button className="btn btn-primary btn-lg" onClick={onDec}>
        DEC
      </button>
      <button className="btn btn-primary btn-lg" onClick={onInc}>
        INC
      </button>
      <button className="btn btn-primary btn-lg" onClick={onRnd}>
        RND
      </button>
    </div>
  );
};

export default Counter;
