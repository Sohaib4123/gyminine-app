import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const MembershipsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Memberships Screen</Text>
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