import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const applyThunk = [thunk]

const store = createStore(rootReducer,applyMiddleware(...applyThunk))

export default store