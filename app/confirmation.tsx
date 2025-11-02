import { useLocalSearchParams, useRouter } from 'expo-router';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ConfirmationScreen() {
  const { nilaiTerkecil } = useLocalSearchParams();
  const router = useRouter();

  const handleSimpan = () => {
    // Simpan data - bisa ke AsyncStorage atau database
    Alert.alert(
      'Berhasil',
      `Nilai terkecil "${nilaiTerkecil}" telah disimpan!`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Konfirmasi</Text>
      
      <Text style={styles.description}>
        Nilai terkecil dari data yang Anda masukkan adalah:
      </Text>

      <View style={styles.resultBox}>
        <Text style={styles.result}>{nilaiTerkecil}</Text>
      </View>

      <TouchableOpacity 
        style={styles.buttonSave} 
        onPress={handleSimpan}
      >
        <Text style={styles.buttonText}>Simpan</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonPrimary} 
        onPress={() => router.push('/input')}
      >
        <Text style={styles.buttonText}>Input Nilai Lagi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  resultBox: {
    backgroundColor: '#F8F9FA',
    padding: 40,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 3,
    borderColor: '#28A745',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  result: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#28A745',
  },
  buttonSave: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonPrimary: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonSecondary: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSecondary: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});