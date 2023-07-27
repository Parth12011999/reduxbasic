import { combineReducers } from "redux";
import userReducer from "../features/userReducer";
import contactReducer from "../features/contactReducer";
import countReducer from "../features/countReducer";

const rootReducer = combineReducers({
    user:userReducer,
    contact:contactReducer,
    count:countReducer
})

export default rootReducer