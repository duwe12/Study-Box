import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { styles } from "./style"

export function AlunosMaterialScreen() {
    const [aulas, setAulas] = useState([
        {
            id: "1",
            nome: "Aula 10 - Variáveis"
        },
        {
            id: "2",
            nome: "Aula 11 - Variáveis"
        },
        {
            id: "3",
            nome: "Aula 12 - Variáveis"
        },
        {
            id: "4",
            nome: "Aula 13 - Variáveis"
        },
        {
            id: "5",
            nome: "Aula 14 - Variáveis"
        },
        {
            id: "6",
            nome: "Aula 13 - Variáveis"
        },
        {
            id: "7",
            nome: "Aula 14 - Variáveis"
        },
        {
            id: "8",
            nome: "Aula 13 - Variáveis"
        },
        {
            id: "9",
            nome: "Aula 14 - Variáveis"
        },
    ]);


    function renderAula({ item }) {
        return (
            <TouchableOpacity style={styles.botao} >
                <Text style>{item.nome}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View style={styles.container}>
                <Image style={styles.imagemCoruja} source={{ uri: "https://i.imgur.com/8gOfVoj.jpg" }} />
            </View>

            <View style={styles.container2}>
                <FlatList
                    data={aulas}
                    renderItem={renderAula}
                    keyExtractor={item => item.id}
                />
            </View>
        </>
    );
};
