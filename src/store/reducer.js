import {combineReducers} from "redux-immutable";
import headerReducer from "../common/Header/store/reducer";


export default combineReducers({
    header: headerReducer
})

