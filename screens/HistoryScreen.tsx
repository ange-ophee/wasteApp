import React, { useContext, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { ReportContext } from '../context/ReportContext';

const HistoryScreen = () => {
  const { reports } = useContext(ReportContext);

  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [sortDescending, setSortDescending] = useState(true);

  const filteredReports = reports
    .filter((report) =>
      (selectedType === 'All' || report.wasteType === selectedType) &&
      (selectedStatus === 'All' || report.status === selectedStatus) &&
      (selectedLocation === 'All' || report.location === selectedLocation)
    )
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortDescending ? dateB - dateA : dateA - dateB;
    });

  const uniqueTypes = ['All', ...new Set(reports.map((r) => r.wasteType || 'Unknown'))];
  const uniqueStatuses = ['All', ...new Set(reports.map((r) => r.status || 'Unknown'))];
  const uniqueLocations = ['All', ...new Set(reports.map((r) => r.location || 'Unknown'))];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report History</Text>

      <View style={styles.controls}>
        <Picker
          selectedValue={selectedType}
          style={styles.picker}
          onValueChange={(value) => setSelectedType(value)}
        >
          {uniqueTypes.map((type, index) => (
            <Picker.Item
              label={String(type)}
              value={String(type)}
              key={String(type)}
            />
          ))}
        </Picker>

        <Picker
          selectedValue={selectedStatus}
          style={styles.picker}
          onValueChange={(value) => setSelectedStatus(value)}
        >
          {uniqueStatuses.map((status, index) => (
            <Picker.Item
              label={String(status)}
              value={String(status)}
              key={String(status)}
            />
          ))}
        </Picker>

        <Picker
          selectedValue={selectedLocation}
          style={styles.picker}
          onValueChange={(value) => setSelectedLocation(value)}
        >
          {uniqueLocations.map((location, index) => (
            <Picker.Item
              label={String(location)}
              value={String(location)}
              key={String(location)}
            />
          ))}
        </Picker>

        <TouchableOpacity onPress={() => setSortDescending(!sortDescending)}>
          <Text style={styles.sortButton}>
            Sort: {sortDescending ? 'Newest → Oldest' : 'Oldest → Newest'}
          </Text>
        </TouchableOpacity>
      </View>

      {filteredReports.length === 0 ? (
        <Text style={styles.empty}>No matching reports found.</Text>
      ) : (
        <FlatList
          data={filteredReports}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              {item.image && <Image source={{ uri: item.image }} style={styles.image} />}
              <Text style={styles.name}>Waste Type: {item.wasteType}</Text>
              <Text>Weight: {item.weight} kg</Text>
              <Text>Location: {item.location}</Text>
              <Text>Status: {item.status}</Text>
              <Text>Date: {item.date}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#e6f0fa' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, color: '#034592', textAlign: 'center' },
  controls: { marginBottom: 16 },
  picker: { height: 50, marginBottom: 8 },
  sortButton: { padding: 8, color: '#034592', fontWeight: 'bold', textAlign: 'center' },
  empty: { textAlign: 'center', fontSize: 16, color: '#777', marginTop: 50 },
  card: { backgroundColor: 'white', padding: 12, marginBottom: 12, borderRadius: 10, elevation: 2 },
  name: { fontSize: 18, fontWeight: '600', marginBottom: 4 },
  image: { width: '100%', height: 180, borderRadius: 8, marginBottom: 8 },
});

export default HistoryScreen;