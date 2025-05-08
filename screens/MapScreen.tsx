import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons

// New collection points added
const collectionPoints = [
  {
    id: '1',
    name: 'Point A',
    type: 'Plastic',
    status: 'Full',
    distance: '500m',
  },
  {
    id: '2',
    name: 'Point B',
    type: 'Glass',
    status: 'Empty',
    distance: '1.2km',
  },
  {
    id: '3',
    name: 'Point C',
    type: 'Organic',
    status: 'Ongoing',
    distance: '850m',
  },
  {
    id: '4',
    name: 'Point D',
    type: 'Plastic',
    status: 'Empty',
    distance: '400m',
  },
  {
    id: '5',
    name: 'Point E',
    type: 'Glass',
    status: 'Full',
    distance: '2.1km',
  },
];

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collection Points</Text>
      <FlatList
        data={collectionPoints}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Type: {item.type}</Text>
            <View style={[styles.statusContainer, { backgroundColor: getStatusColor(item.status) }]}>
              <Icon name={getStatusIcon(item.status)} size={20} color="#fff" />
              <Text style={styles.statusText}>{item.status}</Text>
            </View>
            <Text>Distance: {item.distance}</Text>
          </View>
        )}
      />
    </View>
  );
};

// Helper function to get status color based on status
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Empty':
      return '#A9E5A0'; // Light Green
    case 'Ongoing':
      return '#FFF6A5'; // Light Yellow
    case 'Full':
      return '#FF7D7D'; // Light Red
    default:
      return '#E6F0FA'; // Light Blue as default background
  }
};

// Helper function to get status icon name based on status
const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Empty':
      return 'check-circle'; // Green checkmark
    case 'Ongoing':
      return 'exclamation-circle'; // Yellow warning
    case 'Full':
      return 'times-circle'; // Red cross
    default:
      return 'circle'; // Default icon
  }
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E6F0FA', // Light Blue background for MapScreen
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    fontFamily: 'Book Antiqua',
    color: '#034592', // Dark Blue color for the title
  },
  card: {
    backgroundColor: 'white',
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Book Antiqua',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '7%',
    padding: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
  statusText: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'Book Antiqua',
  },
});
