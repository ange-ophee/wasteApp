import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

const AddReportScreen = () => {
  const [wasteType, setWasteType] = useState('');
  const [weight, setWeight] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    if (!wasteType || !weight || !location) {
      Alert.alert('Incomplete Info', 'Please fill all fields');
      return;
    }

    setModalVisible(true);
    // Here, you'd normally save to context or server
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access media library is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a New Report</Text>

      <Picker
        selectedValue={wasteType}
        onValueChange={(itemValue) => setWasteType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Waste Type" value="" />
        <Picker.Item label="Plastic" value="Plastic" />
        <Picker.Item label="Glass" value="Glass" />
        <Picker.Item label="Organic" value="Organic" />
        <Picker.Item label="Metal" value="Metal" />
      </Picker>

      <TextInput
        placeholder="Estimated Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        style={styles.input}
        keyboardType="numeric"
      />

      <Picker
        selectedValue={location}
        onValueChange={(itemValue) => setLocation(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Select Location" value="" />
        <Picker.Item label="Yassa" value="Yassa" />
        <Picker.Item label="Bonapriso" value="Bonapriso" />
        <Picker.Item label="Bonamoussadi" value="Bonamoussadi" />
      </Picker>

      <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
        <Text style={styles.buttonText}>Pick an Image</Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}

      <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
        <Text style={styles.buttonText}>Submit Report</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Report submitted successfully!</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
              <Text style={styles.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddReportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6fafa',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Book Antiqua',
    textAlign: 'center',
    color: '#02735E',
    marginBottom: 20,
  },
  picker: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 8,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  imageButton: {
    backgroundColor: '#02735E',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: '#034592',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Book Antiqua',
    fontSize: 16,
  },
  imagePreview: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'Book Antiqua',
    marginBottom: 20,
    color: '#02735E',
  },
  modalButton: {
    backgroundColor: '#02735E',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 8,
  },
});