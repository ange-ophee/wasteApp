import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.clipartmax.com/png/middle/108-1084407_light-blue-universal-recycling-symbol-logo-sign-recycling-symbols.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Home - Waste Management Dashboard</Text>

      {/* Action Buttons with custom styles */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Map')}
      >
        <Text style={styles.buttonText}>Go to Map</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddReport')}
      >
        <Text style={styles.buttonText}>Add Report</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('History')}
      >
        <Text style={styles.buttonText}>View History</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f0fa', // Light blue background for HomeScreen
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#003366', // Dark blue color for the title
    fontFamily: 'Book Antiqua', // Font style
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20, // Space between logo and title
  },
  button: {
    backgroundColor: '#034592', // Button background color
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10, // Space between buttons
    width: '80%', // Ensure the buttons are not too wide
    alignItems: 'center',
  },
  buttonText: {
    color: 'white', // White text color for the button
    fontSize: 18,
    fontFamily: 'Book Antiqua', // Font style for button text
  },
});

export default HomeScreen;
