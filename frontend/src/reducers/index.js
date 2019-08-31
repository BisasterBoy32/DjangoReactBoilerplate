import { combineReducers } from "redux"
import { reducer as reduxReducer } from "redux-form"

export default combineReducers({
    form :reduxReducer
})