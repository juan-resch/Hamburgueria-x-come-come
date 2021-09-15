import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { View, Text, FlatList, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { add_carrinho, delete_item } from '../../actions/AppActions';

import { Item, Button, ItemCart } from '../../components';

import styles from './styles';

const Cardapio = props => {

  console.log(props.carrinho)

  const [count, setCount] = useState(1);
  const [selectedItem, setSelectedItem] = useState({});

  const decrement = () => {
    if(count > 1){
      setCount(count - 1)
    }
  }

  const increment = () => {
    if(count < 15){
      setCount(count + 1)
    }
  }

  const items = props.items;
  const cart_ref = useRef(null);
  const add_cart = useRef(null);

  const open_cart = () => {
    cart_ref.current?.open();
  }

  const open_modal_add = (item) => {
    add_cart.current?.open();

    setSelectedItem(item);
  }

  const add_item = () => {
    const item_ = {...selectedItem, quantidade: count}
    props.add_carrinho(item_);
    setCount(1);
    add_cart.current?.close();
  }

  const delete_item = item => {
    props.delete_item(item);
  }

  return(
    <View style={styles.container}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff'/>
      <View style={styles.header}>
        <Text style={styles.title}>Cardápio</Text>
        <TouchableOpacity onPress={open_cart}>
          <Icon name='cart-outline' size={32} color='#000'/>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, height: '100%'}}>
        <ScrollView style={{width: '100%', height: '100%'}}>
          <View style={styles.content}>
            {items.map((item, index) => <Item key={index} data={item} onPress={() => {open_modal_add(item)}}/>)}
          </View>
        </ScrollView>
      </View>
      <Modalize ref={cart_ref} snapPoint={600} modalHeight={600} useNativeDriver>
        <ScrollView>
          <View style={{height: 600, padding: 10}}>
            {props.carrinho.map((item, index) => <ItemCart key={index} data={item} onPress={delete_item}/>)}
          </View>
        </ScrollView>
      </Modalize>
      <Modalize ref={add_cart} snapPoint={600} modalHeight={600} useNativeDriver>
        <View style={styles.modal_add_cart}>
          <Item data={selectedItem} width={300}/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 300, alignItems: 'center', marginTop: 30}}>
            <TouchableOpacity onPress={decrement} style={styles.btn}>
              <AntIcon name='minus' size={22} color='#ff0000aa'/>
            </TouchableOpacity>
            <Text style={{color: '#222', fontWeight: 'bold', fontSize: 18}}>qtd: {count}</Text>
            <TouchableOpacity onPress={increment} style={{...styles.btn, borderColor: '#00ff00aa'}}>
              <AntIcon name='plus' size={22} color='#00ff00aa'/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 300, alignItems: 'center', marginTop: 30}}>
            <Button text='Cancelar' width={120} height={40} color='#f00' onPress={() => {add_cart.current?.close(); setCount(1)}}/>
            <Button text='Adicionar' width={120} height={40} color='#0f0' onPress={add_item}/>
          </View>
        </View>
      </Modalize>
    </View>
  );
}

const mapStateToProps = state => (
  {
      items: state.AppReducer.items,
      carrinho: state.AppReducer.carrinho
  }
)

export default connect(mapStateToProps, { add_carrinho, delete_item })(Cardapio);
