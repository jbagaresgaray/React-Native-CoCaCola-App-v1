import {useNavigation} from '@react-navigation/core';
import React, {useLayoutEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
  Text,
} from 'react-native';
import {COLORS, FONT_FAMILY} from '../constant';
import Button from '../components/Button';

import BackSVG from '../assets/svg/back.svg';

import Path3Img from '../assets/svg/path3.svg';
import Path4Img from '../assets/svg/path4.svg';
import {COCO_COLA} from '../data';

const CartScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Cart',
      headerRight: null,
      headerLeft: () => (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.goBack()}>
          <BackSVG />
        </TouchableOpacity>
      ),
      headerTitleStyle: styles.headerTitleStyle,
      headerStyle: styles.headerStyle,
    });
  }, [navigation]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.cartItem}>
        <View style={styles.cartItemDetail}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.posterImage}
          />
          <View style={styles.cartItemLabel}>
            <Text style={styles.textLabel}>{item.name}</Text>
            <Text style={styles.textQuantity}>$ 3.00</Text>
          </View>
        </View>
        <Text style={styles.textQuantity}>X2</Text>
      </View>
    );
  };

  return (
    <View style={styles.safeAreaView}>
      <StatusBar hidden />
      <View style={styles.path4ImgContainer}>
        <Path4Img />
      </View>
      <View style={styles.path3ImgContainer}>
        <Path3Img />
      </View>
      <FlatList
        style={styles.FlatList}
        data={COCO_COLA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index + '-key'}
      />
      <View style={styles.Footer}>
        <Text style={styles.textTotal}>$ 12.00</Text>
        <Button label="Buy" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.primary,
    position: 'relative',
    paddingTop: 56,
  },
  headerStyle: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    elevation: 0,
    shadowColor: 'transparent',
    shadowRadius: 0,
    shadowOffset: {
      height: 0,
    },
  },
  headerTitleStyle: {
    fontSize: 30,
    lineHeight: 40,
    letterSpacing: 0.66,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.EXTRA_BOLD,
    textTransform: 'uppercase',
  },
  buttonStyle: {
    padding: 6,
    margin: 6,
  },
  buttonViewsStyle: {
    flexDirection: 'row',
  },
  posterImage: {
    height: 111,
    width: 70,
  },
  path3ImgContainer: {
    position: 'absolute',
    left: -110.4,
    top: -289,
  },
  path4ImgContainer: {
    position: 'absolute',
    left: -110.4,
    top: -289,
  },
  FlatList: {
    paddingTop: 50,
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    // marginVertical: 10,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#F3F3F3',
  },
  cartItemDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartItemLabel: {
    marginStart: 24,
  },
  Footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  textTotal: {
    fontSize: 24,
    lineHeight: 32,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.EXTRA_BOLD,
  },
  textLabel: {
    fontSize: 16,
    lineHeight: 21,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.LIGHT,
    textTransform: 'uppercase',
  },
  textQuantity: {
    fontSize: 16,
    lineHeight: 21,
    color: COLORS.white,
    fontFamily: FONT_FAMILY.EXTRA_BOLD,
    textTransform: 'uppercase',
  },
});

export default CartScreen;
