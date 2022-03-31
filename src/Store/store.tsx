import { createStore } from 'redux'
import { Reducers } from './reducer';

export const store = createStore(Reducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

