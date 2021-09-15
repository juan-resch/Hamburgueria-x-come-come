import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export default styles = StyleSheet.create({
  content: {
    width: '100%',
    height: 120,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginVertical: 0,
    borderRadius: 8,
    paddingRight: 4
  },
  img: {
    width: 120,
    height: 120,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222'
  },
  desc: {
    fontSize: 14,
    fontWeight: '100',
    color: '#333',
    width: 160
  },
  price: {
    fontSize: 20,
    fontWeight: '100',
    color: '#00ff55',
  }
});