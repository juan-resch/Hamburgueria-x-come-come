import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import styles from './style'

export const Item = props => {
  const item = props.data;

  return(
    <TouchableOpacity onPress={props.onPress} style={{...styles.content, width: props.width ? props.width : 160}} >
      <Image style={{...styles.img, width: props.width ? props.width : 160}} source={{uri: item.img}} />
      <View style={{justifyContent: 'space-between', height: 100, width: '100%', padding: 8}}>
        <View style={{height: 80}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
        <View>
          <Text style={styles.price}>R${item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}