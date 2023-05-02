const redux = require ('redux');
const thunk = require('redux-thunk');
const axios = require('axios');
const applyMiddleware= redux.applyMiddleware;
const createStore = redux.createStore;


// state initialization
const initialState = {
loading : true,
data: [],
error : ''

}


// Actions
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS= "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE= "FETCH_USER_FAILURE";


// Actions Creators
const fetchUserRequest = () =>{
return{
    type:FETCH_USER_REQUEST
}

};

const fetchUserSuccess = (data) =>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:users
    }
    
    };

    const fetchUserfailure = (error) =>{
        return{
            type :FETCH_USER_FAILURE,
            payload:error
        }
        
        };    

        const reducer = (state=initialState, action) => {
            switch(action.type){
                case FETCH_USER_REQUEST:
                    return{
                        ...state,
                        loading:true
                    }
                case FETCH_USER_SUCCESS:
                    return{
                        loading:false,
                        date:action.payload,
                        error:''
                    }  
                    case FETCH_USER_FAILURE:
                    return{
                        loading:false,
                        data:[],
                        error:action.payload  
                    }      
            }
        }
        // api calling
        const fetchUsers= () => {
            return function(dispatch){
                dispatch(fetchUserRequest)
                axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
                    const data=response.data;
                dispatch(fetchUserSuccess(data))    
                }).catch(error =>{
                dispatch(fetchUserfailure(error))
                })
            }


        }


        const store =createStore(reducer,applyMiddleware(thunk));
        store.dispatch(fetchUsers);