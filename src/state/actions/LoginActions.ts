import { ActionType } from '../action-types/LoginTypes'

interface Login {
    type: ActionType.LOGIN;
    payload: string
  }
  
  interface LoginSucess {
    type: ActionType.LOGIN_SUCCESS,
    payload: {error: boolean, userName: string}
  }
  
  
 export type Action = Login | LoginSucess;