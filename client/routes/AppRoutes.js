import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfessorHomeScreen } from "../screens/ProfessorScreens/ProfessorHomeScreen";
import { CriarProvasScreen } from "../screens/ProfessorScreens/CriarProvasScreen";
import { MateriaScreen } from "../screens/ProfessorScreens/MateriaScreen";
import { AlunoHomeScreen } from "../screens/AlunoScreens/AlunoHomeScreen";
import { AlunosFrequenciaScreen } from "../screens/AlunoScreens/Frequencia";
import { AlunosMaterialScreen } from "../screens/AlunoScreens/Material";
import { AlunosNotasScreen } from "../screens/AlunoScreens/Notas";
import { useUser } from "../contexts/UserContext";

const Stack = createNativeStackNavigator();

function ProfessorRoutes() {
    return (
        <Stack.Navigator 
            initialRouteName="SignIn"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 44
                },
                headerTitleAlign: "center"
            }}>
            <Stack.Screen
                name="HomeProfessor"
                component={ProfessorHomeScreen} />
            <Stack.Screen
                name="CriarProvas"
                component={CriarProvasScreen} />
            <Stack.Screen
                name="MateriaReact"
                component={MateriaScreen}  />
        </Stack.Navigator>
    );
}

function AlunosRoutes() {
    return (
        <Stack.Navigator 
            initialRouteName="SignIn"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "black"
                },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                    fontSize: 44
                },
                headerTitleAlign: "center"
            }}>
            <Stack.Screen
                name="AlunoHome"
                component={AlunoHomeScreen}/>
            <Stack.Screen
                name="Frequencia"
                component={AlunosFrequenciaScreen} />
            <Stack.Screen
                name="Material"
                component={AlunosMaterialScreen}/>
            <Stack.Screen
                name="Notas"
                component={AlunosNotasScreen} />
        </Stack.Navigator>
    );
}

export function AppRoutes() {
    const { state } = useUser();

    console.log(state);
    return (
        <>
            {
                state.user.permissao === "aluno" ?
                <AlunosRoutes /> :
                <ProfessorRoutes />
            }
        </>
    );
}