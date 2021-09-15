import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 12,
    marginBottom: 30
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#fff',
    elevation: 14,
    paddingHorizontal: 26,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    color: '#222',
    fontSize: 18
  },
  modal_add_cart: {
    paddingHorizontal: 25,
    paddingVertical: 25,
    alignItems: 'center'
  },
  btn: {
    width: 90,
    height: 40,
    elevation: 15,
    backgroundColor: '#fff',
    borderStyle: "solid",
    borderColor: '#ff0000aa',
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  }
});