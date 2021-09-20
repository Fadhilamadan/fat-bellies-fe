import reducer from './index';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

export default createStore(reducer, applyMiddleware(thunk));
