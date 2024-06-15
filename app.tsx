// App.tsx (en la raíz del proyecto)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ExploreScreen from './app/(tabs)/explore';
import FavoritesScreen from './app/(tabs)/favorites';
import MessagesScreen from './app/(tabs)/messages';
import ProfileScreen from './app/(tabs)/profile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Explora') {
            iconName = focused ? 'magnifying-glass' : 'magnifying-glass';
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Mensajes') {
            iconName = focused ? 'message1' : 'message1';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'account' : 'account';
          }

          // Verificar que iconName no sea undefined
          if (!iconName) {
            return null;
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Explora" component={ExploreScreen} />
      <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      <Tab.Screen name="Mensajes" component={MessagesScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
