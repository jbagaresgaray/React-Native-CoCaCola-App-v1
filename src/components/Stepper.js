import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS} from '../constant';

const Stepper = () => {
  return (
    <View style={styles.Stepper}>
      <TouchableOpacity style={styles.StepperButton}>
        <Text style={styles.StepperButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.StepperText}>1</Text>
      <TouchableOpacity style={styles.StepperButton}>
        <Text style={styles.StepperButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Stepper;

const styles = StyleSheet.create({
  Stepper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  StepperText: {
    fontSize: 39,
    lineHeight: 52,
    color: COLORS.white,
    fontWeight: '900',
    marginHorizontal: 16,
  },
  StepperButton: {
    borderWidth: 2,
    borderColor: COLORS.white,
    borderRadius: 999,
    width: 45,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  StepperButtonText: {
    fontSize: 28,
    color: COLORS.white,
  },
});
