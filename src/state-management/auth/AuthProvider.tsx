import { createContext, Dispatch, ReactNode, useReducer } from 'react';

interface AuthContextTypes {
  username: string;
  dispatch: Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextTypes>(
  {} as AuthContextTypes
);

interface LoginAction {
  type: 'LOGIN';
  username: string;
}

interface LogoutAction {
  type: 'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (username: string, action: AuthAction): string => {
  if (action.type === 'LOGIN') return action.username;
  if (action.type === 'LOGOUT') return '';

  return username;
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, dispatch] = useReducer(authReducer, '');

  return (
    <AuthContext.Provider value={{ username, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
