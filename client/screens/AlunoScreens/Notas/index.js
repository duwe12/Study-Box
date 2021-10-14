import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { styles } from "./style"

export function AlunosNotasScreen() {
    return (
        <>
            <View style={styles.container}>
                <Image style={styles.imagemCoruja} source={{ uri: "https://i.imgur.com/8gOfVoj.jpg" }} />
            </View>

            <View style={styles.container2}>

                <TouchableOpacity style={styles.botao} >
                    <Text>Trimestre 1: Média 80%</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} >
                    <Text>Trimestre 2: Média 80%</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} >
                    <Text>Trimestre 3: Média 80%</Text>
                </TouchableOpacity>

            </View>
        </>
    );
};


