import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

const ProfileScreen = ({ navigation }: any) => {
  const handleLogout = () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: () => {
            // Add your actual logout logic here (clear auth tokens, etc.)
            navigation.replace('Login'); // Replace with your actual login screen name
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{
          uri: 'https://www.freesvg.org/img/Female-Avatar.png', // Placeholder avatar
        }}
        style={styles.avatar}
      />

      {/* User Information */}
      <Text style={styles.name}>Manuella Assako</Text>
      <Text style={styles.email}>manuassako@gmail.com</Text>

      {/* Rank and Badges */}
      <View style={styles.section}>
        <Text style={styles.label}>Rank:</Text>
        <Text style={styles.value}>Eco Warrior 🌿</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Badges:</Text>
        <Text style={styles.value}>♻️ Recycler | 🧹 Clean-Up Hero | 🛠️ Reporter</Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0fa', // Light blue background
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontFamily: 'Book Antiqua',
    color: '#003366',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    fontFamily: 'Book Antiqua',
    color: '#333',
    marginBottom: 30,
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontFamily: 'Book Antiqua',
    color: '#034592',
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
    fontFamily: 'Book Antiqua',
    color: '#222',
  },
  button: {
    backgroundColor: '#034592',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: '#c0392b', // Red tone for logout (optional, or keep same blue)
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Book Antiqua',
  },
});
