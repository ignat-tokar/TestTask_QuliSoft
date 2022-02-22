import {createStore} from 'redux';

const defaultState = {
  loader: true
}

const reducer = (state=defaultState, action)=>{
  switch(action.type){
    case 'SET_LOADER': return {...state, loader: action.payload};
    default: return state;
  }
}

const store = createStore(reducer);

export default store;