import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

// Ambil ukuran layar
const { width, height } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../../assets/images/bg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.safeArea}>
        {/* Judul Utama */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Selamat Datang</Text>
        </View>

        {/* Tombol Aksi */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => router.push("/login")}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: height * 0.05,
  },
  titleContainer: {
    marginTop: height * 0.15,
    alignItems: "center",
  },
  title: {
    fontSize: height * 0.045,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: height * 0.022,
    color: "#f0f0f0",
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: width * 0.1,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: height * 0.08,
  },
  loginButton: {
    backgroundColor: "#007BFF",
    width: width * 0.7,
    paddingVertical: height * 0.02,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  loginText: {
    color: "#fff",
    fontSize: height * 0.025,
    fontWeight: "600",
  },
  registerButton: {
    backgroundColor: "#fff",
    width: width * 0.7,
    paddingVertical: height * 0.02,
    borderRadius: 15,
    alignItems: "center",
  },
  registerText: {
    color: "#ff4d4d",
    fontSize: height * 0.025,
    fontWeight: "600",
  },
});
