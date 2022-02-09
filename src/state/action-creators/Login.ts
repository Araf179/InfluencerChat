import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types/LoginTypes';
import { Action } from '../actions/LoginActions';


export const login = (username: string, password: string) => {
    return async (dispatch: Dispatch<Action>) => {
        console.log("In action")
        dispatch({
            type: ActionType.LOGIN,
            payload: "username"
        });
    }
}