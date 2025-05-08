import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const collectionPoints = [
  {
    id: '1',
    name: 'Point A',
    type: 'Plastic',
    status: 'Full',
    distance: '500m',
    icon: 'https://img.icons8.com/color/96/plastic.png',
  },
  {
    id: '2',
    name: 'Point B',
    type: 'Glass',
    status: 'Empty',
    distance: '1.2km',
    icon: 'https://img.icons8.com/color/96/wine-bottle.png',
  },
  {
    id: '3',
    name: 'Point C',
    type: 'Organic',
    status: 'Ongoing',
    distance: '850m',
    icon: 'https://img.icons8.com/color/96/leaf.png',
  },
  {
    id: '4',
    name: 'Point D',
    type: 'Metal',
    status: 'Full',
    distance: '2.0km',
    icon: 'https://img.icons8.com/color/96/metal.png',
  },
  {
    id: '5',
    name: 'Point E',
    type: 'Plastic',
    status: 'Empty',
    distance: '1.5km',
    icon: 'https://img.icons8.com/color/96/plastic.png',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Empty':
      return 'green';
    case 'Ongoing':
      return 'orange';
    case 'Full':
      return 'red';
    default:
      return 'black';
  }
};

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collection Points</Text>
      <FlatList
        data={collectionPoints}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.icon }} style={styles.icon} />
            <View style={styles.details}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.text}>Type: {item.type}</Text>
              <Text style={[styles.text, { color: getStatusColor(item.status) }]}>
                Status: {item.status}
              </Text>
              <Text style={styles.text}>Distance: {item.distance}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#e6f0fa', // Light blue background
  },
  title: {
    fontSize: 22,
    fontFamily: 'Book Antiqua',
    marginBottom: 16,
    color: '#034592',
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
    alignItems: 'center',
    height: 130, // Slightly taller
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Book Antiqua',
    color: '#034592',
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Book Antiqua',
    marginBottom: 2,
  },
});
