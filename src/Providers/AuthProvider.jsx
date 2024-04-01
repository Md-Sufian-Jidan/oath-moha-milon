import PropTypes from 'prop-types';

import { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase';

export const AuthContext = createContext(null);

//create user in firebase
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading , setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth , email, password);
    };

    const signInUser = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth , email, password)
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    //observe auth state change
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log('current value of the current user', currentUser);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {user, createUser , signInUser , logOut, loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}

/**
 * 1. create context and export it
 * 2. set Provider with value
 * 3. use the Auth Provider in the main.jsx file
 * 4. access children in the AuthProvider component as children and use it in the middle of the Provider
 */