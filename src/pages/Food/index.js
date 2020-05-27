import React, { useState, Component } from 'react';
import { View, Image, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialIcons} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

import style from './style';

export default function Food(){
    const navigation = useNavigation();
    const [ loading, setLoading] = useState(false);

    function goBack(){
        navigation.goBack();
    }

    return(
        <ScrollView showsVerticalScrollIndicator={false} /* remover a barra de rolagem vertical */ >

            <View style={style.container}>

                <Image source={require('../../../assets/logo-vertical.png')} style={style.logo} /* Logo dp header */ />

                <View style={style.box} /* bloco 1 com informações da doação */>
                    <Text style={style.textBox}> Agendamento da doação </Text>
                    
                    <View style={style.form}>
                        <View /* Input nome do doador */>
                            <TextInput style={style.inputPadrao}
                                placeholder= 'Doador responsável'
                                placeholderTextColor= '#999999'
                            />
                        </View>

                        <View style={style.InputsLine} /* Bloco contendo 3 inputs (Data, Hora, Qtd) */ >
                            <View style={style.inputData} /* Input data */>
                                <TextInput
                                    placeholder= 'Data'
                                    placeholderTextColor= '#999999'
                                />
                            </View>

                            <View style={style.inputHora} /* Input hora */>
                                <TextInput
                                    placeholder= 'Hora'
                                    placeholderTextColor= '#999999'
                                />
                            </View>

                            <View style={style.inputQtd} /* Input quantidade */>
                                <TextInput
                                    placeholder= 'Qtd'
                                    placeholderTextColor= '#999999'
                                />
                            </View>
                        </View>

                        <View style={style.texte} /* Input item */>
                            <TextInput
                                style={style.inputItem}
                                placeholderTextColor= '#999999'
                                multiline={true}
                                numberOfLines={4}
                                placeholder= 'Item'
                                textAlignVertical="top"
                            />
                        </View>

                        <View /* Input contato */>
                            <TextInput style={[style.inputPadrao, {marginBottom: 25}]}
                                placeholder= 'Número de contato'
                                placeholderTextColor= '#999999'
                            />
                        </View>
                    </View>
                    
                </View>

                <View style={[style.box, {marginTop: 20}]} /* bloco 2 com as informações de endereço */ >
                    <Text style={style.textBox}> Endereço da doação </Text>
                    
                    <View style={style.form}>
                        <View /* Input Cep */>
                            <TextInput style={style.inputPadrao}
                                placeholder= 'CEP'
                                placeholderTextColor= '#999999'
                            />
                        </View>

                        <View /* Input Logradouro */>
                            <TextInput style={style.inputPadrao}
                               placeholder= 'Logradouro'
                               placeholderTextColor= '#999999'
                                />
                        </View>

                        <View /* Input Bairro */>
                            <TextInput style={style.inputPadrao}
                                placeholder= 'Bairro'
                                placeholderTextColor= '#999999'
                            />
                        </View>

                        <View /* Input Cidade */>
                            <TextInput style={style.inputPadrao}
                                placeholder= 'Cidade'
                                placeholderTextColor= '#999999'
                            />
                        </View>

                        <View style={style.InputsLine} /* Bloco contendo 2 inputs (Logradouro, Número)*/ >
                            <View style={style.inputEstado} /* Input logradouro */>
                                <TextInput
                                    placeholder= 'Estado'
                                    placeholderTextColor= '#999999'
                                />
                            </View>

                            <View style={style.inputNumero} /* Input número */>
                                <TextInput
                                    keyboardType={"numeric"}
                                    placeholder= 'Número'
                                    placeholderTextColor= '#999999'
                                />
                            </View>
                        </View>

                        <View /* input Complemtento */ >
                            <TextInput style={[style.inputPadrao, {marginBottom: 25}]}
                                placeholder= 'Complemento'
                                placeholderTextColor= '#999999'
                                />
                        </View>
                    </View>
                 </View>

                <View style={style.buttomBox} /* Campo dos botões da tela */ >
                    <View>
                        <TouchableOpacity onPress={ goBack } /* Botão voltar */ >
                            <LinearGradient colors={['#81bd3c', '#629648', '#106b34']}
                                start={[1, 1.5]} end={[0.1 , 1.3]} style={style.buttomBack}>
                                <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View >
                        <TouchableOpacity onPress={() => {} } /* Botão de proceguir */ >
                            <LinearGradient colors={['#81bd3c', '#629648', '#106b34']}
                                start={[1.1, 1.9]} end={[0.2 , 1.1]} style={style.buttomTerminate} >
                                    {loading ? <ActivityIndicator size="small" color="#fff" />
                                        : <Text style={style.terminateText}>Concluir Agendamento</Text>}
                            </LinearGradient >
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
