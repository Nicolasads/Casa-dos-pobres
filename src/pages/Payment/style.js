import { StyleSheet } from "react-native";

export default StyleSheet.create({
   container: {
       flex: 1
   },
   header: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 60,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderColor: "#e9e9e9",
    zIndex: 1000,
    elevation: 1000,
   },
   buttom: {
    width: 60,
    height: 40,
    marginTop: 20,
    marginLeft: 12
   },
});