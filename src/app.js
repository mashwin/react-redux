import { createStore } from 'redux';

// STEP 3: Define Reducer
const reducer = function(state = {}, action) {
  switch (action.type) {
    case 'ADD_USER':
      return state = action.payload;
      break;
    default:
  }

  return state;
}

// STEP 1: Create Store
const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});


// STEP 2: Dispatch Actions
store.dispatch({
  type: 'ADD_USER',
  payload: {
    'username': 'mashwin',
    'email': 'mashwin@gmail.com'
  }
});
