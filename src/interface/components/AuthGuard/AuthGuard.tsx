import { ReactNode } from 'react';
import { AuthPage } from '../../pages/Auth/Auth';
import { useAuthContext } from '../../context/authContext';

interface AuthGuardProps {
  children: ReactNode;
}

export const AuthGuard = ({ children }: AuthGuardProps) => {
  const { token } = useAuthContext();

  if (!token) {
    return <AuthPage />;
  }

  return children;
};
