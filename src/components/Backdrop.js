import React from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../colors';

const {width, height} = Dimensions.get('window');
const BACKDROP_HEIGHT = height * 0.65;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;

const Backdrop = ({dataArr, scrollX}) => {
  return (
    <View style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
      <FlatList
        data={dataArr}
        keyExtractor={(item, index) => index + '-backdrop'}
        removeClippedSubviews={false}
        contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
        renderItem={({item, index}) => {
          return (
            <Animated.View
              key={index}
              removeClippedSubviews={false}
              style={{
                width,
                height,
                overflow: 'hidden',
                alignItems: 'center',
              }}>
             
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default Backdrop;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 49,
    lineHeight: 65,
    letterSpacing: 0.66,
    color: COLORS.white,
    textTransform: 'uppercase',
  },
});
