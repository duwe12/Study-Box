import React, { useEffect, useState } from 'react';
import {
    Button,
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    Image,
    Animated,
    Keyboard,
} from 'react-native';
import { List } from 'react-native-paper';
import { useAuth } from '../../../contexts/AuthContext';
import { api } from '../../../services/api';
import { styles } from './styles';




export function ProfessorHomeScreen({ navigation }) {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 100 }));
    const [opacity] = useState(new Animated.Value(0));


    const [expanded, setExpanded] = React.useState(true);    

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.y, {
                toValue: 1,
                speed: 600,
                bounciness: 20,
                useNativeDriver: false
            }),
            Animated.timing(opacity, {
                toValue: 10,
                duration: 5000,
                useNativeDriver: false
            })
        ]).start();
    }, []);

    const [turmas, setTurmas] = useState([]);

    useEffect(() => {
        async function getTurmas() {
            try {
                const turmas = (await api.get("/turmas")).data;

                setTurmas(turmas);
            } catch (error) {
                console.log(error);
            }
        }

        getTurmas();
    }, []);

    const { authActions } = useAuth();


    return (

        < KeyboardAvoidingView style={styles.container}>
            <Animated.View
                style={[styles.containerImg, {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y }
                    ]
                }
                ]}>
                <Image style={styles.ImgUser}
                    source={{ uri: "https://i.imgur.com/8gOfVoj.jpg" }} />
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

                {
                    turmas.map(turma => (
                        <List.Section style={{ marginHorizontal: 30, }}>
                            <List.Accordion
                                title={turma.nome}
                                left={props => <List.Icon {...props} icon={turma.icone} />}
                                style={{
                                    backgroundColor: '#b38a0e',
                                    borderBottomWidth: 5
                                }}
                                description={turma.descricao}
                            >
                                <List.Item left={props => <List.Icon {...props}
                                    icon="book-multiple" />}
                                    style={styles.itemsList}
                                    title="Materiais" />
                                <List.Item left={props => <List.Icon {...props}
                                    icon="numeric-9-plus-box-multiple" />}
                                    style={styles.itemsList}
                                    title="Notas" />
                                <List.Item left={props => <List.Icon {...props}
                                    icon="calendar-multiple" />}
                                    style={styles.itemsList}
                                    onPress={() => navigation.push("MateriaReact")} 
                                    title="Presença" 
                                />
                            </List.Accordion>
                        </List.Section>
                    ))
                }
                <TouchableOpacity onPress={() => authActions.signOut()}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    );
};
