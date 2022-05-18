import { combineReducers } from "redux";
import contactsSlice from "./slices/contactsSlice";

const rootReducers = combineReducers({
    contacts:contactsSlice 
})

export default rootReducers;
