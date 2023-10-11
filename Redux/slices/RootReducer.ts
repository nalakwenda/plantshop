import { combineReducers } from "redux";
import { api } from "../apis/services";
import authReducer from '../slices/AuthSlice'

const rootReducer = combineReducers({
    auth: authReducer,
    [api.reducerPath]: api.reducer,
})

export default rootReducer