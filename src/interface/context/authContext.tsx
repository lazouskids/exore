import { ReactNode, createContext, useContext, useState } from 'react';

type Token = string | null;

interface IAuthContext {
  token: Token;
  set: (value: Token) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const initialState: IAuthContext = {
  token: null,
  set: (value) => value,
};

export const AuthContext = createContext<IAuthContext>(initialState);

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  const set = (value: string | null) => setToken(value);

  return (
    <AuthContext.Provider value={{ token, set }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
