const redux = require ('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
 
// Action
const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";
const BUY_PASTRY = "BUY_PASTRY";

// Acrion Caretor is a function that returns action.

function buyCake () {
return {
type: BUY_CAKE,
info: "First Redux Action"

}
}

function buyIcecream () {
    return {
        type: BUY_ICECREAM,
        
    }
}
function buyPastry () {
    return {
    type: BUY_PASTRY,
    info: "First Redux Action"
    
    }
    }
    


// Reducer takes previous state and action  and returns new state
// (prevState, action) => newState

const cakeState = {
numOfCakes : 10,

}
const iceCreamState ={
    numOfIcecreams :20
}

const pastryState ={
    numOfPastry :15
}
const CakeReducer = ( state = cakeState , action) => {
switch(action.type) {
    case BUY_CAKE: return {
       ...state,
       numOfCakes: state.numOfCakes-1

    }


    default: return state
    }
}


const IceCreamReducer = ( state = iceCreamState , action) => {
    switch(action.type) {
        
    case BUY_ICECREAM: return{
        ...state,
        numOfIcecreams : state.numOfIcecreams-1
    }
    
        default: return state
        }
    }

    const PastryReducer = ( state = pastryState , action) => {
        switch(action.type) {
            case BUY_PASTRY: return {
               ...state,
               numOfPastry: state.numOfPastry-1
        
            }
        
        
            default: return state
            }
        }
    const rootReducer =combineReducers({
        IceCreamReducer:IceCreamReducer,
        CakeReducer:CakeReducer,
        PastryReducer:PastryReducer, 

    })




// Shop store

const store = createStore(rootReducer);

  
store.dispatch(buyPastry());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
console.log('Updated state', store.getState()) 


