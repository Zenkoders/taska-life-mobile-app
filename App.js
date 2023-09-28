import React from 'react';

import {SafeAreaView, StyleSheet, Text} from 'react-native';

import {COLORS} from './src/utils/constants/theme';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Taska.Life</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: COLORS.primary,
    fontSize: 60,
  },
});

export default App;
