import {useNavigation, useRoute} from '@react-navigation/core';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {SharedElement} from 'react-navigation-shared-element';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Text,
  Image,
  Platform,
} from 'react-native';
import {COLORS, FONT_FAMILY} from '../constant';
import Button from '../components/Button';

import BackSVG from '../assets/svg/back.svg';
import CartSVG from '../assets/svg/cart.svg';

import Path3Img from '../assets/svg/path3.svg';
import Path4Img from '../assets/svg/path4.svg';
import Path5Img from '../assets/svg/path5.svg';
import Stepper from '../components/Stepper';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const params = route.params;
    const data = params?.item;
    setItem(data);
  }, [route]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerRight: () => (
        <View style={styles.buttonViewsStyle}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Cart')}>
            <CartSVG />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.goBack()}>
          <BackSVG />
        </TouchableOpacity>
      ),
      headerStyle: styles.headerStyle,
    });
  }, [navigation]);

  return (
    <View style={styles.safeAreaView}>
      <StatusBar hidden />
      <View style={styles.path4ImgContainer}>
        <Path4Img />
      </View>
      <View style={styles.path3ImgContainer}>
        <Path3Img />
      </View>
      <View style={styles.path5ImgContainer}>
        <Path5Img />
      </View>
      <ScrollView contentContainerStyle={styles.ScrollView}>
        {item && (
          <>
            <Animatable.View
              style={styles.Details}
              animation="slideInLeft"
              duration={800}>
              <View>
                <Animatable.Text style={styles.DetailsTitle}>
                  {item.name}
                </Animatable.Text>
                <View style={styles.DetailsContainer}>
                  <Animatable.View
                    style={styles.DetailsCaptionView}
                    animation="slideInLeft">
                    <Text style={styles.DetailsCaption}>Year</Text>
                    <Text style={styles.DetailsLabel}>{item.year}</Text>
                  </Animatable.View>
                  <Animatable.View
                    style={styles.DetailsCaptionView}
                    animation="slideInLeft">
                    <Text style={styles.DetailsCaption}>Price</Text>
                    <Text style={styles.DetailsLabel}>$ 3.00</Text>
                  </Animatable.View>
                  <Animatable.View
                    style={styles.DetailsCaptionView}
                    animation="slideInLeft">
                    <Text style={styles.DetailsCaption}>Size</Text>
                    <Text style={styles.DetailsLabel}>{item.size}</Text>
                  </Animatable.View>
                </View>
              </View>

              <Animatable.Image
                animation="zoomIn"
                source={item.image}
                resizeMode="contain"
                style={styles.posterImage}
              />
            </Animatable.View>
            <Animatable.View
              style={styles.DetailsTextContainer}
              animation="slideInRight">
              <Text style={styles.DetailsText}>
                Our original, iconic, great tasting drink refreshes millions, at
                every moment, all around the world. Created in 1886 by
                pharmacist Dr John Pemberton, it’s been making everyday moments
                special for over 130 years.
                {`\n\n`}
                And some not-so-everyday moments, too… in 1985, it was the first
                soft drink in space.
              </Text>
            </Animatable.View>
          </>
        )}
      </ScrollView>
      <Animatable.View style={styles.Footer} animation="slideInUp">
        <Stepper value={quantity} />
        <Button label="Add" />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.primary,
    position: 'relative',
  },
  ScrollView: {
    paddingTop: Platform.OS === 'android' ? 56 : 86,
    paddingHorizontal: 30,
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
  buttonStyle: {
    padding: 6,
    margin: 6,
  },
  buttonViewsStyle: {
    flexDirection: 'row',
  },
  Details: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 384,
    flex: 1,
  },
  DetailsContainer: {
    paddingTop: 25,
  },
  DetailsCaptionView: {
    paddingBottom: 16,
  },
  DetailsTitle: {
    fontSize: 49,
    lineHeight: 65,
    letterSpacing: 0.66,
    fontFamily: FONT_FAMILY.EXTRA_BOLD,
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  DetailsLabel: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: FONT_FAMILY.EXTRA_BOLD,
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  DetailsCaption: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: FONT_FAMILY.LIGHT,
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  DetailsText: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: FONT_FAMILY.LIGHT,
    color: COLORS.white,
  },
  DetailsTextContainer: {
    paddingVertical: 25,
  },
  posterImage: {
    height: 314,
    // marginTop: 25,
    // backgroundColor: 'blue',
    // width: '100%',

    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  path3ImgContainer: {
    position: 'absolute',
    left: -70.4,
    top: -207,
  },
  path4ImgContainer: {
    position: 'absolute',
    left: -70.4,
    top: -207,
  },
  path5ImgContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  Footer: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: Platform.OS === 'android' ? 20 : 30,
  },
});

export default Details;
