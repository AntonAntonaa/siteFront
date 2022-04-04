import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import { Reducers } from './reducer';


export const store = createStore(Reducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

