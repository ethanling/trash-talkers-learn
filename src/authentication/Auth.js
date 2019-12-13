import React, { useEffect, useState } from "react";
import appAuth from "./config.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        appAuth.auth().onAuthStateChanged(setCurrentUser);
        foo();
    }, []);

    const foo = () => {
        console.log(currentUser)
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

