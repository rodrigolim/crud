import 'react-native-gesture-handler';

import React from 'react';
import { StyleSheet } from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './pages/HomeScreen';
import RegisterUser from './pages/RegisterUser';
import UpdateUser from './pages/UpdateUser';
import ViewUser from './pages/ViewUser';
import ViewAllUser from './pages/ViewAllUser';
import DeleteUser from './pages/DeleteUser';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: estilos.container.backgroundColor, //Set Header color
            },
            headerTintColor: estilos.container.headerTintColor, //Set Header text color
            headerTitleStyle: {
              fontWeight: estilos.container.fontWeight, //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewUser}
          options={{
            title: 'Consultar usuário', //Set Header Title
            headerStyle: {
              backgroundColor: estilos.container.backgroundColor, //Set Header color
            },
            headerTintColor: estilos.container.headerTintColor, //Set Header text color
            headerTitleStyle: {
              fontWeight: estilos.container.fontWeight, //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllUser}
          options={{
            title: 'Visualizar todos usuários', //Set Header Title
            headerStyle: {
              backgroundColor: estilos.container.backgroundColor, //Set Header color
            },
            headerTintColor: estilos.container.headerTintColor, //Set Header text color
            headerTitleStyle: {
              fontWeight: estilos.container.fontWeight, //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateUser}
          options={{
            title: 'Alterar usuário', //Set Header Title
            headerStyle: {
              backgroundColor: estilos.container.backgroundColor, //Set Header color
            },
            headerTintColor: estilos.container.headerTintColor, //Set Header text color
            headerTitleStyle: {
              fontWeight: estilos.container.fontWeight, //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: 'Cadastrar usuário', //Set Header Title
            headerStyle: {
              backgroundColor: estilos.container.backgroundColor, //Set Header color
            },
            headerTintColor: estilos.container.headerTintColor, //Set Header text color
            headerTitleStyle: {
              fontWeight: estilos.container.fontWeight, //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteUser}
          options={{
            title: 'Excluir usuário', //Set Header Title
            headerStyle: {
              backgroundColor: estilos.container.backgroundColor, //Set Header color
            },
            headerTintColor: estilos.container.headerTintColor, //Set Header text color
            headerTitleStyle: {
              fontWeight:  estilos.container.fontWeight, //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


const estilos = StyleSheet.create({
  container: {
    fontWeight: 'bold',
    headerTintColor: '#fff',
    backgroundColor: '#16537E',
  },
});