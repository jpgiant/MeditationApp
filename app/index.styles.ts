import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  imgContainer: {
    flex: 8,
    backgroundColor: "#ffffff",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 2,
    // backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
  },
  SignInContainer: {
    flex: 2,
    // backgroundColor: "blue",
  },
  svgStyle: {
    width: "100%",
    height: "100%",
  },
  imgStyle: {
    position: "absolute",
    width: "90%",
    height: "90%",
    zIndex: 1,
    // backgroundColor: "red",
  },
  titleStyle: {
    position: "absolute",
    height: "50%",
    width: "50%",
    zIndex: 2,
    bottom: "58%",
  },
  textStyle1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
    // backgroundColor: "red",
  },
  textStyle2: {
    flex: 2,
    // justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "yellow",
    marginHorizontal: 35,
  },
});
