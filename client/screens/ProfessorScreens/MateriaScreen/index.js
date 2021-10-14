import React, { useEffect, useState } from 'react';

import {
    Button,
    View,
    Text,
    Animated,
    Image,
    Pressable,
    KeyboardAvoidingView,
    TextInput,

} from 'react-native';
import { List } from 'react-native-paper';
import { styles } from './styles';
import React2 from '../../../assets/react22.png';
import { Accordion } from '../../../components/Accordion';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';



export function MateriaScreen() {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));



    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 1,
                speed: 500,
                bounciness: 20,
                useNativeDriver: false
            }),
            Animated.timing(opacity, {
                toValue: 10,
                duration: 10000,
                useNativeDriver: false
            })
        ]).start();
    }, []);



    return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#182e45', }}>

            <Animated.View
                style={[styles.containerImg, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }]}

            >
                <Image style={styles.imgUser}
                    source={React2} />
            </Animated.View>

            <Animated.View

                style={[styles.containerList, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
                ]}
            >

                <Accordion title="Criar aula" icon="comment-arrow-right">
                    <View style={styles.ViewInpP}>
                        <TextInput style={styles.input1} placeholder="Nome da aula:" />
                        <TextInput style={styles.input1} placeholder="Data da aula:" />
                        <TextInput style={styles.input1} placeholder="Inserir link:" />
                    </View>
                    <TouchableOpacity style={styles.ButtonSlvr}>
                        <Text style={styles.text}>Salvar</Text>
                    </TouchableOpacity>
                </Accordion>

                <Accordion title="Aula 5 {if else}" icon="react">
                   
                    <View style={styles.ViewInP}>
                        <TextInput style={styles.inputLink} placeholder="InserirLink:" />
                    </View>

                    <View>
                        
                        <View style={styles.ViewInp}>
                            <Text style={styles.textDaPre}>Lucas bretzke</Text>
                            <TextInput style={styles.input} placeholder="P / F" />
                        </View>

                        <View style={styles.ViewInp}>
                            <Text style={styles.textDaPre}>Cleiton Raxta</Text>
                            <TextInput style={styles.input} placeholder="P / F" />
                        </View>

                        <View style={styles.ViewInp}>
                            <Text style={styles.textDaPre}>João Cleber</Text>
                            <TextInput style={styles.input} placeholder="P / F" />
                        </View>

                        <View style={styles.ViewInp}>
                            <Text style={styles.textDaPre}>Kaylaine Nogues</Text>
                            <TextInput style={styles.input} placeholder="P / F" />
                        </View>


                        <View style={styles.ViewInp}>
                            <Text style={styles.textDaPre}>Lucas bretzke</Text>
                            <TextInput style={styles.input} placeholder="P / F" />
                        </View>

                        <View style={styles.ViewInp}>
                            <Text style={styles.textDaPre}>Cleiton Raxta</Text>
                            <TextInput style={styles.input} placeholder="P / F" />
                        </View>

                        <View style={styles.ViewInp}>
                            <Text style={styles.textDaPre}>João Cleber</Text>
                            <TextInput style={styles.input} placeholder="P / F" />
                        </View>

                        <View style={styles.ViewInp}>
                            <Text style={styles.textDaPre}>Kaylaine Nogues</Text>
                            <TextInput style={styles.input} placeholder="P / F" />
                        </View>
                      
                    </View>
                    <TouchableOpacity style={styles.ButtonSlvr}>
                        <Text style={styles.text}>Salvar</Text>
                    </TouchableOpacity>
                  
                </Accordion>

            </Animated.View>
        </KeyboardAvoidingView>
    );
};