import 'react-native-gesture-handler';
import * as React from 'react';

//Navs
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import PlayScreen from '../screens/PlayScreen';
import FavsScreen from '../screens/FavsScreen';
import ListaVideosScreen from '../screens/ListaVideosScreen';

const Tab = createBottomTabNavigator();
function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#94BE20',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Inicio" component={HomeStackScreen}/>
        <Tab.Screen name="Favoritos" component={FavsStackScreen} />
        <Tab.Screen name="Listas Principales" component={PlayListStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//Home Stack
const HomeStack = createStackNavigator();
const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="PlayVideo" component={PlayScreen} />
  </HomeStack.Navigator>
);

//Favs Stack
const FavsStack = createStackNavigator();
const FavsStackScreen = () => (
  <FavsStack.Navigator>
    <FavsStack.Screen name="Favoritos" component={FavsScreen} />
    <FavsStack.Screen name="PlayVideo" component={PlayScreen} />
  </FavsStack.Navigator>
);

//Listas Principales Stack
const PlayListStack = createStackNavigator();
const PlayListStackScreen = () => (
  <PlayListStack.Navigator>
    <PlayListStack.Screen name="Menu" component={MenuScreen} />
    <PlayListStack.Screen name="ListaVideos" component={ListaVideosScreen} />
    <PlayListStack.Screen name="PlayVideo" component={PlayScreen} />
  </PlayListStack.Navigator>
);

export default MainTabNavigator;
