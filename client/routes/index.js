import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../contexts/AuthContext";
import { SplashScreen } from "../screens/SplashScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { UserProvider } from "../contexts/UserContext";
import { AppRoutes } from "./AppRoutes";

export function Router() {
    const { state } = useAuth();
    
    return (
        <NavigationContainer>
            {state.isLoading ? (                
                <SplashScreen />
            ) : state.accessToken == null ? (                
                <LoginScreen />
            ) : (      
                <UserProvider>
                    <AppRoutes />
                </UserProvider>               
            )}
        </NavigationContainer>
    );    
}