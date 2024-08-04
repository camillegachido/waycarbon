import { createContext, PropsWithChildren } from 'react';
import { User } from '../common/types/user';
import { users } from '../services/data/users';

export interface AuthContext {
  user: User;
}

const loggedUser = { ...users[0], avatar_url: '' };

export const AuthContext = createContext<AuthContext>({
  user: loggedUser,
});

const AuthProvider = ({ children }: PropsWithChildren) => {
  const user = loggedUser;

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
