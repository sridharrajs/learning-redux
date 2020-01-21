const createStore = (reducer) => {

  let state;
  let listeners = [];

  const dispatch = (action) => {
    state = reducer(state, action);
  };

  const getState = () => {
    return state;
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };

  dispatch({});

  return {
    getState,
    dispatch,
    subscribe,
  };
}


const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};


const store = createStore(reducer);

// default state
console.log('current store', store.getState());

// increment
console.log('Action =>  INCREMENT');
store.dispatch({type: 'INCREMENT'});
console.log('current store', store.getState());

// decrement
console.log('Action =>  DECREMENT');
store.dispatch({type: 'DECREMENT'});
console.log('current store', store.getState());

// invalid operation
console.log('Action =>  COUNT');
store.dispatch({type: 'COUNT'});
console.log('current store', store.getState());
