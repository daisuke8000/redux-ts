import { ActionType } from '../action-type';
import { Action } from '../actions';

const initialState = {
    loading: false,
    error: null,
    data: []
}

interface RepositoriesState {
    loading: boolean;
    error: string | null;
    data: string[];
}

const reducer = (
    state: RepositoriesState = initialState,
    action: Action,
): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: ['testettte'] };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default reducer;