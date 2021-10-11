export function createAction(type) {
    return {
        type,
        create: payload => ({ type, payload })
    }
}

export function createAsyncAction(actionName, defaultState = null) {
    const pending = `${actionName}[pending]`;
    const success = `${actionName}[success]`;
    const failure = `${actionName}[failure]`;

    function reducer(state = defaultState, action) {
        switch (action.type) {
            case pending: return { isPending: true };
            case success: return { isPending: false };
            case failure: return { isPending: false, error: action.error };
            default: return state;
        }
    }

    const actionTypes = {
        pending: createAction(pending),
        success: createAction(success),
        failure: createAction(failure),
    };

    function wrap(action) {
        return () => (dispatch, ...args) => {
            dispatch(actionTypes.pending.create(...args));
            action(dispatch, ...args)
                .then(result => dispatch(actionTypes.success.create(result)))
                .catch(result => dispatch(actionTypes.failure.create(result)));
        }
    }

    return {
        actionTypes,
        wrap,
        reducer,
    }
}