import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ClassesScreen = () => {
  return (
    <View style={styles.container}>
      <Text>All Classes Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});