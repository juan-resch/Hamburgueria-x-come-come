import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default styles = StyleSheet.create({
  content: {
    width: 180,
    height: 240,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 10,
    backgroundColor: '#fff',
    marginBottom: 12,
    marginHorizontal: 10
  },
  img: {
    width: 180,
    height: 120,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#222'
  },
  desc: {
    fontSize: 12,
    fontWeight: '400',
    color: '#333'
  },
  price: {
    fontSize: 18,
    fontWeight: '100',
    color: '#00dd55'
  }
});