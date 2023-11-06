import axios from '../../axiosConfig';
import { LoginFormDTO, LoginResponseDTO, RegisterFormDTO, User } from '../../api/auth.dto';
import { destroyCookie } from 'nookies';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const GET_ME_REQUEST = 'GET_ME_REQUEST';
export const GET_ME_SUCCESS = 'GET_ME_SUCCESS';
export const GET_ME_FAILURE = 'GET_ME_FAILURE';

export const LOGOUT = 'LOGOUT';

interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: LoginResponseDTO;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: Error;
}

interface RegisterRequestAction {
  type: typeof REGISTER_REQUEST;
}

interface RegisterSuccessAction {
  type: typeof REGISTER_SUCCESS;
  payload: LoginResponseDTO;
}

interface RegisterFailureAction {
  type: typeof REGISTER_FAILURE;
  payload: Error;
}

interface GetMeRequestAction {
  type: typeof GET_ME_REQUEST;
}

interface GetMeSuccessAction {
  type: typeof GET_ME_SUCCESS;
  payload: User;
}

interface GetMeFailureAction {
  type: typeof GET_ME_FAILURE;
  payload: Error;
}

interface LogoutAction {
  type: typeof LOGOUT;
}

export type AuthActionTypes = LoginRequestAction | LoginSuccessAction | LoginFailureAction
  | RegisterRequestAction | RegisterSuccessAction | RegisterFailureAction
  | GetMeRequestAction | GetMeSuccessAction | GetMeFailureAction
  | LogoutAction;

export const login = (values: LoginFormDTO) => {
  return (dispatch: (arg: AuthActionTypes) => void) => {
    dispatch({ type: LOGIN_REQUEST });
    axios.post('/auth/login', values)
      .then(response => {
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: LOGIN_FAILURE, payload: error });
      });
  };
};

export const register = (values: RegisterFormDTO) => {
  return (dispatch: (arg: AuthActionTypes) => void) => {
    dispatch({ type: REGISTER_REQUEST });
    axios.post('/auth/register', values)
      .then(response => {
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: REGISTER_FAILURE, payload: error });
      });
  };
};

export const getMe = () => {
  return (dispatch: (arg: AuthActionTypes) => void) => {
    dispatch({ type: GET_ME_REQUEST });
    axios.get('/users/me')
      .then(response => {
        dispatch({ type: GET_ME_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: GET_ME_FAILURE, payload: error });
      });
  };
};

export const logout = () => {
  return (dispatch: (arg: AuthActionTypes) => void) => {
    destroyCookie(null, '_token', { path: '/' });
    dispatch({ type: LOGOUT });
  };
};