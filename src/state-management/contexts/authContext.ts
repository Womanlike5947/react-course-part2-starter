import { createContext, Dispatch } from 'react';
import { AuthAction } from '../reducers/authReducer';

interface AuthContextTypes {
  username: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextTypes>({} as AuthContextTypes);

export default AuthContext;
