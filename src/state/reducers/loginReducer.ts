import { ActionType } from '../action-types/LoginTypes'
import { Action } from '../actions/LoginActions'

interface LoginState {
  loading: boolean;
  error: boolean;
  loginData?: { username?: string };
}

const initialState = {
  loading: false,
  error: null,
  loginData: { username: '' }
}


const reducer = (state: LoginState = initialState, 
  action: Action
  ): LoginState => {
  switch (action.type) {
    case ActionType.LOGIN:
      return { loading: true, error: false, loginData: {username: action.payload} };
    case ActionType.LOGIN_SUCCESS:
      return { loading: false, error: action.payload.error, loginData: { username: action.payload.userName } };
    default:
      return state;
  }
};

export default reducer;