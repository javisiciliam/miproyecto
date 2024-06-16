// app/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: '#888', // Color de los iconos inactivos
        tabBarStyle: {
          borderTopWidth: 1, // Borde superior
          borderTopColor: '#ddd', // Color del borde superior
          paddingTop: 5, // Espacio entre el borde superior y los iconos
          height: 90, // Altura de la barra
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Explora',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="search1" size={24} color={focused ? 'blue' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="hearto" size={24} color={focused ? 'blue' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: 'Mensajes',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="mail" size={24} color={focused ? 'blue' : color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="account" size={24} color={focused ? 'blue' : color} />
          ),
        }}
      />
    </Tabs>
  );
}
