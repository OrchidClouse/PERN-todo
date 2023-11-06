import { 
	LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, 
	REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, 
	GET_ME_REQUEST, GET_ME_SUCCESS, GET_ME_FAILURE, 
	LOGOUT, 
	AuthActionTypes 
  } from './authActions';
  import { LoginResponseDTO, User } from '../../api/auth.dto';
  
  interface AuthState {
	loading: boolean;
	user: LoginResponseDTO | User | null;
	error: Error | null;
  }
  
  const initialState: AuthState = {
	loading: false,
	user: null,
	error: null,
  };
  
  export const authReducer = (state = initialState, action: AuthActionTypes): AuthState => {
	switch (action.type) {
	  case LOGIN_REQUEST:
	  case REGISTER_REQUEST:
	  case GET_ME_REQUEST:
		return { ...state, loading: true };
	  case LOGIN_SUCCESS:
	  case REGISTER_SUCCESS:
		return { ...state, loading: false, user: action.payload, error: null };
	  case GET_ME_SUCCESS:
		return { ...state, loading: false, user: action.payload, error: null };
	  case LOGIN_FAILURE:
	  case REGISTER_FAILURE:
	  case GET_ME_FAILURE:
		return { ...state, loading: false, user: null, error: action.payload };
	  case LOGOUT:
		return { ...state, user: null };
	  default:
		return state;
	}
  };