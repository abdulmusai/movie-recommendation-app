import { createContext, useContext, usecontext, useState} from 'react';
import { useNavigation} from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const login = (token) => {
        localStorage.setItem('token', token);
        setUser({ token });
        navigate('/');
    };

    const logout = () => {
        localStorage.removeItem('token');

        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value = { {user, login, logout} }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);