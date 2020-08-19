import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text} from 'react-native';


//Navs
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import PlayScreen from '../screens/PlayScreen';
import FavsScreen from '../screens/FavsScreen';

const Tab = createBottomTabNavigator();
function MainTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#94BE20',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Inicio" component={HomeStackScreen}/>
      <Tab.Screen name="Favoritos" component={FavsScreen} />
      <Tab.Screen name="Listas Principales" component={MenuScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

//Home Stack
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="PlayVideo" component={PlayScreen} />
  </HomeStack.Navigator>
);


//Listas Principales Stack
const PlayListStack = createStackNavigator();
const PlayStackScreen = () => (
  <PlayListStack.Navigator>
    <PlayListStack.Screen name="Home" component={HomeScreen} />
    <PlayListStack.Screen name="PlayVideo" component={PlayScreen} />
  </PlayListStack.Navigator>
);

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeStack">
        <Stack.Screen
          name="HomeStack"
          component={MainTabNavigator}
          options={{title: 'Listas de Videos'}}
        />
        <Stack.Screen
          name="Play"
          component={PlayScreen}
          options={{title: 'Reproducción de Video'}}
        />
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{title: 'Listas Principales'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
