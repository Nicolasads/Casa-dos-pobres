import React, { useState, useContext } from 'react';
import { View, Image, Text, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { TextInputMask } from 'react-native-masked-text'
import { useNavigation } from "@react-navigation/native";

import AuthContext from '../../contexts/authContext'
import api from '../../services/api'
import axios from 'axios'
import style from './style';

export default function Schedule() {
    const navigation = useNavigation();


    const { setUser } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [amount, setAmount] = useState('');
    const [item, setItem] = useState('');
    const [contact, setContatc] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [neighborhood, setneighborhood] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [number, setNumber] = useState('');
    const [complements, setComplemets] = useState('');

    const authenticate = async () => {

        if (name === '' || date === '' || hour === '' || amount === '' ||
            item === '' || contact === '' || cep === '' || street === '' ||
            neighborhood === '' || city === '' || state === '' || number === ''
            || complements === ''
        ){
            Alert.alert("Ops", "Preencha os campos vazios")
            return
        } else {
            if (date.length < 10) {
                Alert.alert("Data Invalida", "Exemplo de data: 20/06/2020")
                return
            } else {
                if (hour.length < 5) {
                    Alert.alert("Hora invalida", "Exemplo de Hora: 16:20")
                    return
                }else{
                    if (contact.length < 14) {
                        Alert.alert("Telefone Invalido", "Exemplo de contato: (81) 998156206")
                        return
                    }
                }
            }
        }
        setLoading(true);
        try {
            const crediacials = {
                responsavel: name,
                data: date,
                cep: cep.replace("-", ''),
                hora: hour,
                quantidade: amount,
                tipoDoacao: 3,
                item: item,
                telefone: contact.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ''),
                estado: state,
                cidade: city,
                logradouro: street,
                bairro: neighborhood,
                nuemero: number,
                referencia: complements
            }
            const response = await api.post('doacao/agendar', crediacials);

            if (response.data) {
                setUser(response.data.agendamento.responsavel)
                navigation.navigate('Finished')
            }

            setLoading(false);
        } catch (e) {
            let error = e.response.data.error;
            if (error) {
                if (error === "Data inválida") {
                    Alert.alert("Ops", "Não foi possível fazer o agendamento. A data escolhida ja passou.")
                }
            } else {
                Alert.alert("Ops", "Parece que houve um problema ao tentar fazer o agendamento. Tente novamente.")
            }
            setLoading(false);
        }

    }

    function hourValidation(text) {
        let condition = text.length.toString()
        setHour(text)
        if (condition > 4) {
            setHour(text)
            let [h, m] = text.split(":")
            let hora = Number(h)
            let min = Number(m)
            if (hora < 0 || hora > 23 || min < 0 || min > 59) {
                Alert.alert("Ops", `horario invalido ${hora}:${min}`)
            }
        }

    }

    async function cepApi(text) {
        try {
            let condition = text.length.toString();
            setCep(text)
            if (condition == 9) {
                const response = await axios.get(`https://viacep.com.br/ws/${text}/json/ `)
                setCep(text)
                if (response.data.erro) {
                    Alert.alert("Ops", "Cep Invalido")
                } else {
                    if (response.data) {
                        setStreet(response.data.logradouro)
                        setneighborhood(response.data.bairro)
                        setCity(response.data.localidade)
                        setState(response.data.uf)
                    }
                }

            }
        } catch (e) {
            Alert.alert("Ops", "Houve um erro ao procurar o cep ")
        }
    }

    function goBack() {
        navigation.goBack();
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} /* remover a barra de rolagem vertical */ >

            <View style={style.container}>

                <Image source={require('../../assets/logo-vertical.png')} style={style.logo} /* Logo dp header */ />

                <View style={style.box} /* bloco 1 com informações da doação */>
                    <Text style={style.textBox}> Agendamento da doação </Text>

                    <View style={style.form}>
                        <View /* Input nome do doador */>
                            <TextInput style={style.inputPadrao}
                                placeholder='Doador responsável'
                                placeholderTextColor='#999999'
                                autoCapitalize="none"
                                returnKeyType="next"
                                onChangeText={(name) => setName(name)}
                            />
                        </View>

                        <View style={style.InputsLine} /* Bloco contendo 3 inputs (Data, Hora, Qtd) */ >
                            <View style={style.inputData} /* Input data */>
                                <TextInputMask
                                    type={'datetime'}
                                    options={{
                                        format: 'DD/MM/YYYY'
                                    }}
                                    placeholder='Data'
                                    placeholderTextColor='#999999'
                                    returnKeyType="next"
                                    onChangeText={(date) => setDate(date)}
                                    value={date}
                                />
                            </View>

                            <View style={style.inputHora} /* Input hora */>
                                <TextInputMask
                                    type={'custom'}
                                    options={{
                                        mask: '99:99'
                                    }}
                                    placeholder='Hora'
                                    placeholderTextColor='#999999'
                                    keyboardType="numeric"
                                    returnKeyType="next"
                                    value={hour}
                                    onChangeText={(hour) => hourValidation(hour)}
                                />
                            </View>

                            <View style={style.inputQtd} /* Input quantidade */>
                                <TextInput
                                    placeholder='Qtd'
                                    placeholderTextColor='#999999'
                                    keyboardType="numeric"
                                    returnKeyType="next"
                                    onChangeText={(qtd) => setAmount(qtd)}
                                />
                            </View>
                        </View>

                        <View style={style.texte} /* Input item */>
                            <TextInput
                                style={style.inputItem}
                                placeholderTextColor='#999999'
                                multiline={true}
                                numberOfLines={4}
                                placeholder='Item'
                                textAlignVertical="top"
                                returnKeyType="next"
                                onChangeText={(item) => setItem(item)}
                            />
                        </View>

                        <View /* Input contato */>
                            <TextInputMask style={[style.inputPadrao, { marginBottom: 25 }]}
                                type={'custom'}
                                options={{
                                    mask: '(99) 999999999'
                                }}
                                placeholder='Número de contato'
                                placeholderTextColor='#999999'
                                keyboardType="numeric"
                                returnKeyType="next"
                                onChangeText={(contact) => setContatc(contact)}
                                value={contact}
                            />
                        </View>
                    </View>

                </View>

                <View style={[style.box, { marginTop: 20 }]} /* bloco 2 com as informações de endereço */ >
                    <Text style={style.textBox}> Endereço da doação </Text>

                    <View style={style.form}>
                        <View /* Input Cep */>
                            <TextInputMask style={style.inputPadrao}
                                type={'custom'}
                                options={{
                                    mask: '99999-999'
                                }}
                                placeholder='CEP'
                                placeholderTextColor='#999999'
                                keyboardType="numeric"
                                returnKeyType="next"
                                onChangeText={(text) => cepApi(text)}
                                value={cep}
                            />
                        </View>

                        <View /* Input Logradouro */>
                            <TextInput style={style.inputPadrao}
                                placeholder='Logradouro'
                                placeholderTextColor='#999999'
                                onChangeText={(street) => setStreet(street)}
                                value={street}
                            />
                        </View>

                        <View /* Input bairro */>
                            <TextInput style={style.inputPadrao}
                                placeholder="Bairro"
                                placeholderTextColor='#999999'
                                autoCapitalize="none"
                                returnKeyType="next"
                                onChangeText={(a) => setneighborhood(a)}
                                value={neighborhood}
                            />
                        </View>

                        <View /* Input Cidade */>
                            <TextInput style={style.inputPadrao}
                                placeholder="Cidade"
                                placeholderTextColor='#999999'
                                autoCapitalize="none"
                                returnKeyType="next"
                                onChangeText={(city) => setCity(city)}
                                value={city}
                            />
                        </View>

                        <View style={style.InputsLine} /* Bloco contendo 2 inputs (estado, Número)*/ >
                            <View style={style.inputLogradouro} /* Input estado*/>
                                <TextInput
                                    placeholder='Estado'
                                    placeholderTextColor='#999999'
                                    autoCapitalize="none"
                                    returnKeyType="next"
                                    onChangeText={(state) => setState(state)}
                                    value={state}
                                />
                            </View>

                            <View style={style.inputNumero} /* Input número */>
                                <TextInput
                                    placeholder='Número'
                                    placeholderTextColor='#999999'
                                    keyboardType="numeric"
                                    returnKeyType="next"
                                    onChangeText={(number) => setNumber(number)}
                                />
                            </View>
                        </View>

                        <View /* input Complemtento */ >
                            <TextInput style={[style.inputPadrao, { marginBottom: 25 }]}
                                placeholder='Complemento'
                                placeholderTextColor='#999999'
                                onChangeText={(comp) => setComplemets(comp)}
                            />
                        </View>
                    </View>
                </View>

                <View style={style.buttomBox} /* Campo dos botões da tela */ >
                    <View>
                        <TouchableOpacity onPress={goBack} /* Botão voltar */ >
                            <LinearGradient colors={['#81bd3c', '#629648', '#106b34']}
                                start={[1, 1.5]} end={[0.1, 1.3]} style={style.buttomBack}>
                                <MaterialIcons name="keyboard-arrow-left" size={30} color="white" />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                    <View >
                        <TouchableOpacity onPress={() => authenticate()} /* Botão de proceguir */ >
                            <LinearGradient colors={['#81bd3c', '#629648', '#106b34']}
                                start={[1.1, 1.9]} end={[0.2, 1.1]} style={style.buttomTerminate} >
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
