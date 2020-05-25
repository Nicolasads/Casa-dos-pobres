import axios from 'axios';
import { AsyncStorage } from 'react-native'

const getData = async () => {
  try {
    const token = await AsyncStorage.getItem('@CasaDosPobres:userToken') //pegando o tokendo do banco
    if(token) {
      return token
    }
  } catch (e) {
    alert(e)
  }
}


const api = axios.create({
  baseURL: 'https://casadospobrescaruaru.ml/public/', 
  headers: {
     'x-api-key' : getData(),
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

export default api;
