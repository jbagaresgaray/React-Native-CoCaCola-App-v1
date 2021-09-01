import React, {useRef, useLayoutEffect} from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS} from '../constant';
import {COCO_COLA} from '../data';

import Path3Img from '../assets/svg/path3.svg';
import Path4Img from '../assets/svg/path4.svg';
import CartSVG from '../assets/svg/cart.svg';
import MenuSVG from '../assets/svg/menu.svg';
import SliderSVG from '../assets/svg/slider.svg';
import Button from '../components/Button';

const {width} = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.8;

const MainScreen = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerRight: () => (
        <View style={styles.buttonViewsStyle}>
          <TouchableOpacity style={styles.buttonStyle}>
            <SliderSVG />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate('Cart')}>
            <CartSVG />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity style={styles.buttonStyle}>
          <MenuSVG />
        </TouchableOpacity>
      ),
      headerStyle: styles.headerStyle,
    });
  }, [navigation]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={{width}}
        onPress={() => {
          navigation.navigate('Details', {
            item,
          });
        }}>
        <Animated.View
          removeClippedSubviews={false}
          style={styles.FlatListItem}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={styles.posterImage}
          />
          <View style={styles.ButtonView}>
            <Button label="Add" />
          </View>
        </Animated.View>
      </TouchableOpacity>
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
      <Animated.FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        decelerationRate="fast"
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.FlatList}
        snapToInterval={width}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        data={COCO_COLA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index + '-key'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.primary,
    position: 'relative',
  },
  FlatList: {
    alignItems: 'center',
  },
  FlatListItem: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  ButtonView: {
    position: 'absolute',
    zIndex: 1,
    bottom: 100,
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
  posterImage: {
    height: 456,
    width: '100%',
  },
  path3ImgContainer: {
    position: 'absolute',
    left: -70.4,
    top: 0,
  },
  path4ImgContainer: {
    position: 'absolute',
    left: -70.4,
    top: 0,
  },
});

export default MainScreen;
