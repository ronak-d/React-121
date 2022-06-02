import axios from "axios";

export const todoActions = {
    GET_TODO_REQUEST:"GET_TODO_REQUEST",
    GET_TODO_SUCCESS:"GET_TODO_SUCCESS",
    GET_TODO_FAILURE:"GET_TODO_FAILURE"
};

// action creators 
// always need to make an different functions in the action so that,
// we can see in what stage the application is running

export const getTodoRequest = () =>{
    type:todoActions.GET_TODO_REQUEST;
}

export const getTodoSuccess = () =>{
    type:todoActions.GET_TODO_SUCCESS;
}

export const getTodoFailure = () =>{
    type:todoActions.GET_TODO_FAILURE3;
}

export const todos = (dispatch) =>{
    const todoRequestAction = getTodoRequest;
    dispatch(todoRequestAction)
    axios({
        url:"https://json-server/mock-server/heroku",
        method: "GET",
    })
    .then((res) => {
        const todoSuccessAction = getTodoSuccess;
        
    })
}