import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


import Notas from './Components/Screens/Notas';
import Cursos from './Components/Screens/Cursos';
import Perfil from './Components/Screens/Perfil';
import Ajustes from './Components/Screens/Ajustes';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="PERFIL"
        activeColor="#FFFFFF"
        inactiveColor="#FFFFFF"
        barStyle={{backgroundColor: '#000068'}}>
        <Tab.Screen
          name="PERFIL"
          component={Perfil}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: () => <Icon name="user" size={25} color="#ffffff"/>,
          }}
        />
        <Tab.Screen
          name="CURSOS"
          component={Cursos}
          options={{
            tabBarLabel: 'Cursos',
            tabBarIcon: () => <Icon name="book" size={25} color={'#ffffff'} />,
          }}
        />
        <Tab.Screen
          name="NOTAS"
          component={Notas}
          options={{
            tabBarLabel: 'Notas',
            tabBarIcon: () => <Icon name="file-o" size={25} color={'#ffffff'} />,
          }}
        />
        <Tab.Screen
          name="AJUSTES"
          component={Ajustes}
          options={{
            tabBarLabel: 'Ajustes',
            tabBarIcon: () => <Icon name="cog" size={25} color={'#ffffff'} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
