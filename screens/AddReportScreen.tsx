import React, { useState } from 'react';
import { View, Text, TextInput, Modal, StyleSheet, Pressable, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddReportScreen = () => {
  const [wasteType, setWasteType] = useState('');
  const [estimatedWeight, setEstimatedWeight] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    if (wasteType.trim() && estimatedWeight.trim()) {
      setModalVisible(true); // Show success modal
    } else {
      Alert.alert("Error", "Please fill in both the Waste Type and Estimated Weight.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Waste Report</Text>

      {/* Waste Type Dropdown */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={wasteType}
          onValueChange={(itemValue) => setWasteType(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Plastic" value="Plastic" />
          <Picker.Item label="Glass" value="Glass" />
          <Picker.Item label="Organic" value="Organic" />
          <Picker.Item label="Metal" value="Metal" />
          <Picker.Item label="Paper" value="Paper" />
        </Picker>
      </View>

      {/* Estimated Weight Input */}
      <TextInput
        style={styles.input}
        placeholder="Estimated Weight (kg)"
        keyboardType="numeric"
        value={estimatedWeight}
        onChangeText={setEstimatedWeight}
        placeholderTextColor="#888"
      />

      {/* Submit Button */}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Report</Text>
      </Pressable>

      {/* Success Modal */}
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>✅ Report Submitted Successfully!</Text>
            <Pressable
              style={[styles.button, { marginTop: 20 }]}
              onPress={() => {
                setModalVisible(false);
                setWasteType('');
                setEstimatedWeight('');
              }}
            >
              <Text style={styles.buttonText}>Close</Text>
            </Pressable>
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
    backgroundColor: '#e6f0fa',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Book Antiqua',
    marginBottom: 20,
    textAlign: 'center',
    color: '#034592',
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  picker: {
    width: '100%',
    height: 40,
    fontFamily: 'Book Antiqua',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    fontFamily: 'Book Antiqua',
  },
  button: {
    backgroundColor: '#034592',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Book Antiqua',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 30,
    alignItems: 'center',
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontFamily: 'Book Antiqua',
    color: '#034592',
    textAlign: 'center',
  },
});
