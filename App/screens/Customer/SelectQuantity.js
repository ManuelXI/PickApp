import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import colors from "../../constants/colors";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
const screen = Dimensions.get("window");
import Constants from "expo-constants";

import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

export default function App({ navigation }) {
  let [fontsLoaded, error] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../../assets/images/SQbackground.jpg")}
        style={styles.imageContainer}
      ></Image>
      <View style={styles.overlay} />
      <View style={styles.bottomContainer}>
        <Text
          style={{
            marginLeft: 80,
            fontFamily: "Montserrat_400Regular",
            fontSize: 15,
          }}
        >
          Paper
        </Text>
        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontFamily: "Montserrat_400Regular",
            fontSize: 12,
            color: colors.lightblue,
          }}
        >
          Select type of Waste
        </Text>
        <View style={styles.separator}></View>

        <TouchableOpacity style={styles.optionsButtons}>
          <Text
            style={{
              fontFamily: "Montserrat_400Regular",
              fontSize: 15,
            }}
          >
            {" "}
            Less than a Bin{" "}
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontFamily: "Montserrat_400Regular",
            fontSize: 12,
            color: colors.lightblue,
          }}
        >
          Select type of Waste
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.headerText}>Select Quantity</Text>

      <TouchableOpacity
        style={{
          position: "absolute",
          width: 32,
          height: 32,
          alignSelf: "flex-start",
          top: Constants.statusBarHeight + 10,
          marginLeft: 20,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image source={require("../../assets/images/back_arrow.png")}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageContainer: {
    top: 0,
    width: "110%",
    height: "66%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    opacity: 0.8,
    height: "65%",
  },
  bottomContainer: {
    position: "absolute",
    height: "50%",
    // bottom: 0,
    top: "55%",
    width: "100%",
    backgroundColor: colors.white,
    // backgroundColor: "red",
    borderTopRightRadius: 95,
    paddingTop: 30,
    // justifyContent: "center",
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: colors.blue,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.white,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    // marginBottom: 20,
    alignSelf: "center",
    top: 45,
    elevation: 10,
  },
  buttonText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
  },
  iconHeader: {
    height: 75,
    width: 95,
    // position: absolute,
    // top: "40%",
  },
  iconText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.grey,
    top: -2,
  },
  headerText: {
    position: "absolute",
    fontFamily: "Montserrat_400Regular",
    fontSize: 45,
    textAlign: "center",
    top: "25%",
    color: colors.white,
  },
  separator: {
    backgroundColor: colors.grey,
    height: StyleSheet.hairlineWidth,
    // height: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    width: screen.width - 40,
  },
  optionsButtons: {
    width: 210,
    height: 30,
    backgroundColor: colors.gray,
    marginTop: 15,
  },
});
