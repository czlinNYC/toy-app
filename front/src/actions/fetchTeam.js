import store from "../store";
const BASE_URL = 'http://localhost:3001';

export const fetch_request = () => {
    return {
        type: "FETCHING_API"
    };
};

export const receive_error = err => {
    return {
        type: "RECEIVE_ERROR",
        data: err
    };
};

export const receive_response_get_all = post => {
    return {
        type: "FETCHED_MEMBERS",
        data: post
    };
};

export const receive_response_get_one = post => {
    return {
        type: "FETCHED_MEMBER",
        data: post
    };
};

export const receive_response_update = post => {
    return {
        type: "UPDATED_MEMBER",
        data: post
    };
};

export const receive_response_create = post => {
    return {
        type: "CREATED_MEMBER",
        data: post
    };
};

export const receive_response_delete = () => {
    return {
        type: "DELETED_MEMBER"
    };
};

export const getAllTeamMembers = () => {
    store.dispatch(fetch_request());
    return async function getMembers(dispatch, getState) {
        try {
            let response = await fetch(`${BASE_URL}`)
            response = await response.json();
            dispatch(receive_response_get_all(response));
        }
        catch (e) {
            dispatch(receive_error(e));
        }
    }
};

export const getTeamMember = id => {
    store.dispatch(fetch_request());
    return async function getMember(dispatch, getState) {
        try {
            let response = await fetch(`${BASE_URL}/members/${id}`)
            response = await response.json();
            dispatch(receive_response_get_one(response));
        }
        catch (e) {
            dispatch(receive_error(e));
        }
    }
};

export const insertTeamMember = data => {
    const opts = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    };
    store.dispatch(fetch_request());
    return async function insertMember(dispatch, getState) {
        try {
            let response = await fetch(`${BASE_URL}`, opts)
            response = await response.json();
            dispatch(receive_response_create(response));
        }
        catch (e) {
            dispatch(receive_error(e));
        }
    }
};

export const updateTeamMember = data => {
    const opts = {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    };
    store.dispatch(fetch_request());
    return async function updateMember(dispatch, getState) {
        try {
            let response = await fetch(`${BASE_URL}/${data.user_group_id}`, opts);
            response = await response.json();
            dispatch(receive_response_update(response));
        }
        catch (e) {
            dispatch(receive_error(e));
        };
    };
};

export const deleteTeamMember = id => {
    const opts = {
        method: 'DELETE',
    };
    store.dispatch(fetch_request());
    return async function deleteMember(dispatch, getState) {
        try {
            let response = await fetch(`${BASE_URL}/${id}`, opts);
            response = await response.json();
            dispatch(receive_response_delete(response));
        }
        catch (e) {
            dispatch(receive_error(e));
        };
    };
};



// export const thunk_action_creator = username => {
//     const user =  username.replace(/\s/g, "");
//     store.dispatch(fetch_post());
//     return async function getUser(dispatch, getState) {
//         try {
//             let data = await fetch(`https://api.github.com/users/${user}`);
//             data = await data.json(); 
//             if (data.message === "Not found") {
//                 throw new Error("No such user found!!");
//             } else { 
//                 dispatch(receive_post(data));
//             };
//         }
//         catch (e) {
//             dispatch(receive_error());
//         }
//     }
// };