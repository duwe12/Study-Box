import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    Image,
    Button,
    Animated,
    TouchableOpacity,

} from 'react-native';
import { styles } from './styles';
import { List } from 'react-native-paper';
import { Accordion } from '../../../components/Accordion';
import UserProf from '../../../assets/UserProf.png';

export function CriarProvasScreen() {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));


    const [expanded, setExpanded] = React.useState(true);
    const handlePress = () => setExpanded(!expanded);


    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 1,
                speed: 500,
                bounciness: 20,
                useNativedriver: false
            }),
            Animated.timing(opacity, {
                toValue: 10,
                duration: 10000,
                useNativeDriver: false
            })
        ]).start();
    }, []);


    return (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#182e45', }}>
            <Animated.View

                style={[styles.containerImg, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
                ]}

            >
                <Image style={styles.userProf} source={UserProf} />
            </Animated.View>

            <Animated.View
                style={[styles.container2, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
                ]}
            >

                <Accordion title="Criar Prova">
                    <View style={styles.ViewInp}>
                        <TextInput style={styles.inputName} placeholder="Nome da prova:" />
                        <TextInput style={styles.inputData} placeholder="Nada da prova:" />
                    </View>

                    <TouchableOpacity style={styles.ButtonSlvr}>
                        <Text style={styles.text}>Salvar</Text>
                    </TouchableOpacity>

                </Accordion>

                <Accordion title="If else"
                >

                    <View style={styles.ViewInp}>
                        <Text style={styles.textDaProva}>Lucas bretzke</Text>
                        <TextInput style={styles.inpDaProva} placeholder="Nota:" />
                    </View>

                    <View style={styles.ViewInp}>
                        <Text style={styles.textDaProva}>Cleiton Raxta</Text>
                        <TextInput style={styles.inpDaProva} placeholder="Nota:" />
                    </View>

                    <View style={styles.ViewInp}>
                        <Text style={styles.textDaProva}>João Cleber</Text>
                        <TextInput style={styles.inpDaProva} placeholder="Nota:" />
                    </View>

                    <View style={styles.ViewInp}>
                        <Text style={styles.textDaProva}>Kaylaine Nogues</Text>
                        <TextInput style={styles.inpDaProva} placeholder="Nota:" />
                    </View>


                    <View style={styles.ViewInp}>
                        <Text style={styles.textDaProva}>Lucas bretzke</Text>
                        <TextInput style={styles.inpDaProva} placeholder="Nota:" />
                    </View>

                    <View style={styles.ViewInp}>
                        <Text style={styles.textDaProva}>Cleiton Raxta</Text>
                        <TextInput style={styles.inpDaProva} placeholder="Nota:" />
                    </View>

                    <View style={styles.ViewInp}>
                        <Text style={styles.textDaProva}>João Cleber</Text>
                        <TextInput style={styles.inpDaProva} placeholder="Nota:" />
                    </View>

                    <View style={styles.ViewInp}>
                        <Text style={styles.textDaProva}>Kaylaine Nogues</Text>
                        <TextInput style={styles.inpDaProva} placeholder="Nota:" />
                    </View>

                    <TouchableOpacity style={styles.ButtonSlvr}>
                        <Text style={styles.text}>Salvar</Text>
                    </TouchableOpacity>

                </Accordion>
            </Animated.View>
        </KeyboardAvoidingView>
    );
































































}