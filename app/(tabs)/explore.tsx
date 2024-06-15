import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const categories = [
  { id: '1', name: 'Casa', icon: 'home' },
  { id: '2', name: 'Apartamento', icon: 'home' },
  { id: '3', name: 'Loft', icon: 'home' },
  { id: '4', name: 'Dúplex', icon: 'home' },
  { id: '5', name: 'Garaje', icon: 'car' },
  
];

const apartments = [
  {
    id: '1',
    image: 'https://example.com/image1.jpg',
    title: 'Apartamento en la playa',
    rating: 4.9,
  },
  {
    id: '2',
    image: 'https://example.com/image2.jpg',
    title: 'Plaza de Garaje',
    rating: 4.5,
  },
  {
    id: '3',
    image: 'https://example.com/image3.jpg',
    title: 'Casa en la ciudad',
    rating: 4.8,
  },
];

export default function ExploreScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredApartments = apartments.filter(apartment =>
    apartment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderCategory = ({ item }: { item: { id: string, name: string, icon: string } }) => (
    <View style={styles.category}>
      <AntDesign name={item.icon as any} size={24} color="black" />
      <Text>{item.name}</Text>
    </View>
  );

  const renderApartment = ({ item }: { item: { id: string, image: string, title: string, rating: number } }) => (
    <View style={styles.apartmentCard}>
      <Image source={{ uri: item.image }} style={styles.apartmentImage} />
      <View style={styles.apartmentInfo}>
        <Text style={styles.apartmentTitle}>{item.title}</Text>
        <Text style={styles.apartmentRating}>Rating: {item.rating}</Text>
        <TouchableOpacity style={styles.heartIcon}>
          <AntDesign name="hearto" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <AntDesign name="search1" size={20} color="black" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar ciudades..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoriesContainer}>
          {categories.map((category) => (
            <View key={category.id} style={styles.category}>
              <AntDesign name={category.icon as any} size={24} color="black" />
              <Text>{category.name}</Text>
            </View>
          ))}
        </ScrollView>

        <FlatList
          data={filteredApartments}
          keyExtractor={item => item.id}
          renderItem={renderApartment}
          contentContainerStyle={styles.apartmentList}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 20, // Espacio para evitar solapamiento con el notch y los iconos de sistema
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginHorizontal: 10,
    marginBottom: 20, // Añadir espacio entre la barra de búsqueda y las categorías
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  categoriesContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'center', // Centrar los íconos
    flexDirection: 'row',
  },
  category: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  apartmentList: {
    padding: 10,
  },
  apartmentCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 15,
  },
  apartmentImage: {
    width: '100%',
    height: 200,
  },
  apartmentInfo: {
    padding: 10,
  },
  apartmentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  apartmentRating: {
    marginTop: 5,
    fontSize: 16,
    color: '#888',
  },
  heartIcon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
