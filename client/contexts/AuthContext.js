import React from "react";
import * as SecureStore from "expo-secure-store";
import { SplashScreen } from "../screens/SplashScreen";
import { api } from "../services/api";

const AuthContext = React.createContext();

const initialState = {
    isLoading: true,
    accessToken: null
}

function reducer(prevState, action) {
    switch(action.type) {
        case "RESTORE_TOKEN":
            return {
                ...prevState,
                accessToken: action.token,
                isLoading: false
            }
        case "SIGN_IN":
            return {
                ...prevState,
                accessToken: action.token
            }
        case "SIGN_OUT":
            return {
                ...prevState,
                accessToken: null
            }
    }
}


export function AuthProvider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    
    React.useEffect(() => {
        async function restoreToken() {
            let accessToken;
            
            try {
                accessToken = await SecureStore.getItemAsync("access-token");
                
                api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
            } catch (err) { 
                console.log(err);
            }
            
            dispatch({ type: "RESTORE_TOKEN", token: accessToken });            
        }
        
        restoreToken();
    }, []);
    
    const authActions = React.useMemo(() => ({
        signIn: async (email, password) => {
            try {                                                
                const accessToken = (await api.post("/auth/login", { email, password })).data;                
                
                await SecureStore.setItemAsync("access-token", accessToken);
                
                api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
                
                dispatch({ type: "SIGN_IN", token: accessToken });
            } catch (err) {
                console.log(err);
                throw err;                           
            }            
        },
        signOut: () => {
            try {
                SecureStore.deleteItemAsync("access-token");
                api.defaults.headers.common["Authorization"] = null;
            } catch (err) {
                console.log(err);
            }
            
            dispatch({ type: "SIGN_OUT" });
        }
    }), []);

    if (state.isLoading) {
        return <SplashScreen />
    }
    
    return (
        <AuthContext.Provider value={{ state, authActions }}>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => React.useContext(AuthContext);