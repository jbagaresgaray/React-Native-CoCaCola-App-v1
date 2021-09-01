import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY} from '../constant';

const Button = ({label}) => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyle: {
    height: 63,
    minWidth: 140,
    backgroundColor: COLORS.white,
    paddingVertical: 6,
    justifyContent: 'center',
    borderRadius: 35,
    elevation: 10,
    shadowColor: '#F3F3F3',
    shadowRadius: 20,
    shadowOffset: {
      height: 10,
    },
  },
  textStyle: {
    fontSize: 25,
    letterSpacing: 0.1,
    lineHeight: 33,
    fontFamily: FONT_FAMILY.EXTRA_BOLD, 
    textTransform: 'uppercase',
    textAlign: 'center',
    color: COLORS.primary,
  },
});
