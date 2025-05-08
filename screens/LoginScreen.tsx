import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    if (!/^[\w.+-]+@gmail\.com$/.test(email)) {
      Alert.alert('Invalid Email', 'Only valid @gmail.com addresses are allowed');
      return;
    }

    Alert.alert('Success', `Logged in as ${email}`);
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.clipartmax.com/png/middle/108-1084407_light-blue-universal-recycling-symbol-logo-sign-recycling-symbols.png',
        }}
        style={styles.logo}
      />

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#6495ed"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#6495ed"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#034592',
    borderWidth: 1.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#034592',
    fontFamily: 'Book Antiqua',
  },
  button: {
    backgroundColor: '#034592',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Book Antiqua',
  },
});

export default LoginScreen;
