import { createStore } from 'redux';

const INITIAL_STATE = {
  counter: 0
}

const counterReducer = (store = INITIAL_STATE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    newStore = { ...store, counter: store.counter + 1 }
  }
  else if (action.type === "DECREMENT") {
    if (store.counter === 0) {
      newStore = { ...store, counter: 0 }
    } else {
      newStore = { ...store, counter: store.counter - 1 }
    }
  } else if (action.type === "ADD") {
    newStore = { ...store, counter: store.counter + +action.payload.num };
  }
  else if (action.type === "SUBTRACT") {
    newStore = { ...store, counter: store.counter - +action.payload.num };
  } else if (action.type = "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy }
  }
  return newStore
}

const counterStore = createStore(counterReducer);

export default counterStore;