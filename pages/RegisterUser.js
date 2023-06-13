import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const RegisterUser = ({navigation}) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let register_user = () => {
    console.log(userName, userContact, userAddress);

    if (!userName) {
      alert('Obrigatório informar o nome');
      return;
    }
    if (!userContact) {
      alert('Obrigatório informar um número de telefone');
      return;
    }
    if (!userAddress) {
      alert('Obrigatório informar o endereço');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Confirmado.',
              'Registro cadastrado com sucesso!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('HomeScreen'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Ocorreu um erro!','A operação não foi confirmada!');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <Mytextinput
                placeholder="Nome"
                onChangeText={(userName) => setUserName(userName)}
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Telefone"
                onChangeText={(userContact) => setUserContact(userContact)}
                maxLength={10}
                keyboardType="numeric"
                style={{padding: 10}}
              />
              <Mytextinput
                placeholder="Endereço"
                onChangeText={(userAddress) => setUserAddress(userAddress)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{textAlignVertical: 'top', padding: 10}}
              />
              <Mybutton title="Confirmar" customClick={register_user} />
            </KeyboardAvoidingView>
          </ScrollView>
        </View>        
      </View>
    </SafeAreaView>
  );
};

export default RegisterUser;
