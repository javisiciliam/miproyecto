// app/tabs/profile.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Perfil</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF', // Fondo blanco
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000000', // Texto en negro
    },
  });
  