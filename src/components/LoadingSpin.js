import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {AppColors} from '../styles/appColors';

const LoadingSpin = () => {
  return (
    <View style={[styles.container, styles.horizontal]}>
      <ActivityIndicator size="small" color={AppColors.colors.cherry_red} />
    </View>
  );
};

export default LoadingSpin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
