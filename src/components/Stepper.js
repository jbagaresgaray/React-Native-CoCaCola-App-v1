import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {COLORS} from '../constant';

const Stepper = props => {
  const {value, minValue, maxValue, stepValue, onChange} = props;
  const [valve, setValve] = useState(value);

  const onLeftPress = () => {
    let newValue = valve - stepValue;
    if (newValue < minValue) {
      newValue = valve;
    }

    setValve(newValue);

    if (onChange) {
      onChange(newValue, valve);
    }
  };

  const onRightPress = () => {
    let newValue = valve + stepValue;
    if (newValue > maxValue) {
      newValue = valve;
    }

    setValve(newValue);

    if (onChange) {
      onChange(newValue, valve);
    }
  };

  return (
    <View style={styles.Stepper}>
      <TouchableOpacity style={styles.StepperButton} onPress={onLeftPress}>
        <Text style={styles.StepperButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.StepperText}>{valve}</Text>
      <TouchableOpacity style={styles.StepperButton} onPress={onRightPress}>
        <Text style={styles.StepperButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

Stepper.propTypes = {
  value: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  stepValue: PropTypes.number,

  onChange: PropTypes.func,
};

Stepper.defaultProps = {
  value: 0,
  minValue: 0,
  maxValue: 10,
  stepValue: 1,
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
