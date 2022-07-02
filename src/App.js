import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";

import ScanQR from "./Components/ScanQR";
import Button from "./Components/Button";

import styles from "./styles";

export default function App() {
  // TODO: integrate Navigation (https://reactnative.dev/docs/navigation)
  const [showScan, setShowScan] = useState(false);
  const [scannedText, setScannedText] = useState("");
  const [QRText, setQRText] = useState("");

  const randStr = () => {
    return Math.random().toString(36).substring(2);
  };

  const handleScanned = (data) => {
    setShowScan(false);
    setScannedText(data);
  };

  return (
    <>
      {showScan ? (
        <ScanQR handleScanned={handleScanned} onClose={() => setShowScan(false)} />
      ) : (
        <SafeAreaView style={styles.container}>
          <View style={{ width: "100%" }}>
            {scannedText ? <Text style={{ margin: 10 }}>QR text = "{scannedText}"</Text> : null}
            <Button title="scan QR code" onPress={() => setShowScan(true)} />
            <Button title="render QR code" onPress={() => setQRText(randStr())} />
            {QRText ? (
              <View style={{ alignItems: "center", marginTop: 10 }}>
                <Text style={{ marginBottom: 5 }}>{QRText}</Text>
                <QRCode size={200} value={QRText} />
              </View>
            ) : null}
          </View>
        </SafeAreaView>
      )}
    </>
  );
}
