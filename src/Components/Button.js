import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";

import styles from "../styles";

function StyledButton({ title, color, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={{ color, textTransform: "uppercase", fontWeight: "600" }}>{title}</Text>
    </TouchableOpacity>
  );
}

StyledButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  color: PropTypes.string,
  style: PropTypes.object,
};

StyledButton.defaultProps = {
  color: "#fff",
  style: {},
};

export default StyledButton;
