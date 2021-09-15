import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons'
import styles from './style'

export const ItemCart = props => {
  const item = props.data;
  
  function apagar() {
    return(
      <View style={{
        height: '100%',
        justifyContent: 'center',
        marginHorizontal: 40
      }}>
        <TouchableOpacity style={{width: 50, height: 50, elevation: 10, borderRadius: 50, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}} onPress={() => {props.onPress(item)}}>
          <Icon name='trash' size={50} color='#f44'/>
        </TouchableOpacity>
      </View>
    );
  }
  return(
    <Swipeable 
    renderRightActions={apagar}
    containerStyle={{backgroundColor:'#fff', marginVertical: 5}}
    useNativeAnimations
    >
      <View style={{...styles.content}}>
        <View style={{flexDirection: 'row'}}>
          <Image style={{...styles.img}} source={{uri: item.img}} />
          <View style={{height: '100%', padding: 4, justifyContent: 'space-between'}}>
            <Text style={styles.name}>{item.quantidade} {item.name}</Text>
            <Text textBreakStrategy='simple' style={styles.desc}>{item.desc}</Text>
            <Text style={styles.price}>R${item.price}</Text>
          </View>
        </View>
        <View style={{height: 70, width: 2, borderRadius: 4, backgroundColor: '#f66', alignSelf: 'center'}}/>
      </View>
    </Swipeable>
  );
}
