import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Button } from 'react-native';
import { styles } from "./style";
import { Entypo } from '@expo/vector-icons';

export function AlunosFrequenciaScreen() {
    return (
        <>

            <View>
                
                <View style={styles.containercoruja}>
                    <Image style={styles.imagemCoruja} source={{ uri: "https://i.imgur.com/8gOfVoj.jpg" }} />
                </View>
            </View>

            <View style={styles.container2}>

                <TouchableOpacity style={styles.botao} >
                    <Text>Trimestre 1: 100%</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} >
                    <Text>Trimestre 2: 100%</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} >
                    <Text>Trimestre 3: 100%</Text>
                </TouchableOpacity>

            </View>
        </>
    );
};