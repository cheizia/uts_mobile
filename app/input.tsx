import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function InputScreen() {
  const [nilai1, setNilai1] = useState('');
  const [nilai2, setNilai2] = useState('');
  const [nilai3, setNilai3] = useState('');
  const [nilai4, setNilai4] = useState('');
  const router = useRouter();

  const handleCari = () => {
    // Validasi input
    if (!nilai1 || !nilai2 || !nilai3 || !nilai4) {
      Alert.alert('Error', 'Semua nilai harus diisi!');
      return;
    }

    // Konversi ke number dan cari nilai terkecil
    const numbers = [
      parseFloat(nilai1),
      parseFloat(nilai2),
      parseFloat(nilai3),
      parseFloat(nilai4)
    ];

    // Validasi apakah input adalah angka valid
    if (numbers.some(isNaN)) {
      Alert.alert('Error', 'Masukkan angka yang valid!');
      return;
    }

    const nilaiTerkecil = Math.min(...numbers);

    // Navigate ke confirmation screen dengan parameter
    router.push({
      pathname: '/confirmation',
      params: { nilaiTerkecil: nilaiTerkecil.toString() }
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cari Nilai Terkecil</Text>
      <Text style={styles.subtitle}>Masukkan 4 nilai untuk dicari nilai terkecilnya</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nilai 1"
        value={nilai1}
        onChangeText={setNilai1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nilai 2"
        value={nilai2}
        onChangeText={setNilai2}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nilai 3"
        value={nilai3}
        onChangeText={setNilai3}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Nilai 4"
        value={nilai4}
        onChangeText={setNilai4}
        keyboardType="numeric"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleCari}>
        <Text style={styles.buttonText}>Cari Nilai Terkecil</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 30,
    textAlign: 'center',
    color: '#666',
  },
  input: {
    height: 55,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});