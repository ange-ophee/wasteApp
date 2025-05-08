import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.clipartmax.com/png/middle/108-1084407_light-blue-universal-recycling-symbol-logo-sign-recycling-symbols.png',
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to the Waste Management App</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Book Antiqua',
    color: '#034592',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonGroup: {
    width: '100%',
    gap: 15,
  },
  button: {
    backgroundColor: '#034592',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Book Antiqua',
    fontWeight: '600',
  },
});

export default WelcomeScreen;
