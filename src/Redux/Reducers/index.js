import UserReducer from "./reducer";
import BoardReducer from './boardreducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    UserReducer,
    BoardReducer
});

export default rootReducer;