import { combineReducers } from "redux";

const initialstate = []
//**************************TEST *****************************************************/
const testreducer = (state = initialstate, action) => {

    if (action.type === "test") {
        return action.payload
    }
    else return state
}

//**************************kHALED *****************************************************/
const getProductreducer = (state = initialstate, action) => {

    if (action.type === "get-product") {
        return action.payload
    }
    else return state
}













//**************************TAKWA *****************************************************/

//history//
const tabHistory = []

function historyReducer(state = tabHistory, action) {

    if (action.type === "affichageListOfHistory") {
        return action.payload
    }
    return state
}
//users//
const tabUsers = []
function usersReducer(state = tabUsers, action) {
    if (action.type === "userdata") {
        return action.payload;
    }
    return state;
};

















//**************************FERYEL *****************************************************/









//**************************COMBINE REDUCER *****************************************************/
export default combineReducers({
    testin: testreducer,
    getProductState: getProductreducer,
    historyState: historyReducer,
    usersState: usersReducer

});