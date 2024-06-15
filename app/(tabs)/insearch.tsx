// app/insearch.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function InSearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Lógica de filtrado aquí
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTabs}>
          <Text style={styles.headerText}>Alquila</Text>
          <Text style={styles.headerText}>Compra</Text>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={20} color="black" />
        <TextInput
          style={styles.searchInput}
          placeholder="Busca tu casa"
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <AntDesign name="closecircle" size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>
      {/* Añadir el resto del contenido aquí */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20, // Espacio para el notch
    backgroundColor: '#FFFFFF',
  },
  headerTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    margin: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
});
