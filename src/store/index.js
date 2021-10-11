import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import login from './login/reducers';
import tasks from './tasks/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        login,
        tasks
    }),
    compose(applyMiddleware(thunk))
);

export default store;