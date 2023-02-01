import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export function useAuthState() {
    return useContext(AuthContext);
}
