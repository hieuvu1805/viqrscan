import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import PropTypes from "prop-types";
import { BarCodeScanner } from "expo-barcode-scanner";

import Button from "./Button";

import styles from "../styles";

function ScanQR({ handleScanned, onClose }) {
  const [hasPermission, setHasPermission] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    handleScanned(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "red",
          width: "100%",
        }}
      >
        <BarCodeScanner onBarCodeScanned={handleBarCodeScanned} style={StyleSheet.absoluteFillObject} />
      </View>
      <View style={styles.backButton}>
        <Button title="Back" onPress={onClose} />
      </View>
    </View>
  );
}

ScanQR.propTypes = {
  handleScanned: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ScanQR;
