import { createUserWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import auth from '../Firebase/Firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    const createUser = () => {
        return createUserWithEmailAndPassword(auth);
    }

    const authInfo = {name:'Nodi sagooooor'};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children : PropTypes.node,
}

/**
 * 1. create context and export it
 * 2. set Provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the Provider
 */