import  { combineReducers } from 'redux';
import LoginReducer from './loginReducer';


const reducers = combineReducers({
    repositories: LoginReducer
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;