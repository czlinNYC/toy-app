const initialState = { 
    memberData: {},
    memberList: [],
    isFetching: false,
    isError: false
};

const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHING_API":
            return Object.assign({}, state, {
                isFetching: true,
                userData: {},
                isError: false
            });
        case "RECEIVE_ERROR":
            return Object.assign({}, state, {
                isError: true,
                isFetching: false,
                err: action.data
            });
        case "FETCHED_MEMBER":
            return Object.assign({}, state, {
                memberData: action.data,
                isFetching: false,
                isError: false
            });
        case "FETCHED_MEMBERS":
            return Object.assign({}, state, {
                memberList: action.data,
                isFetching: false,
                isError: false
            });
        case "CREATED_MEMBER":
            return Object.assign({}, state, {
                memberData: action.data,
                isFetching: false,
                isError: false
            });
        case "UPDATED_MEMBER":
            return Object.assign({}, state, {
                memberData: action.data,
                isFetching: false,
                isError: false
            });
        case "DELETED_MEMBER":
            return Object.assign({}, state, {
                memberData: {},
                isFetching: false,
                isError: false
            });
        default:
            return state;
    }
};

export default memberReducer;