import { combineReducers } from 'redux';
import { login, logout } from './actions';

const defaultState = {
    token: null,
    username: null,
};

function loginData(state = defaultState, action) {
    switch (action.type) {
        case login.actionTypes.success:
            return {
                ...state,
                token: action.token,
                username: action.username,
            }
        case logout.type:
            return defaultState;
        default: return state;
    }
}

export default combineReducers({
    loginData,
    loginStatus: login.reducer,
});