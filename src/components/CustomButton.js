// This folder will contain all the components. We can also place similar
// components in single folder

// For example: A Custom Button Component

import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const CustomButton = () => {
  return (
    <TouchableOpacity>
      <Text>Click me!</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
