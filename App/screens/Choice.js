import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../constants/colors";
import { Icon, InlineIcon } from "@iconify/react";
import arrowDown from "@iconify/icons-bi/arrow-down";

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
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const screen = Dimensions.get("window");

export default ({ navigation }) => {
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
      <StatusBar barStyle="light-content" />
      <Image
        source={require("../assets/images/pattern.png")}
        style={styles.imageContainer}
      ></Image>
      <View style={styles.midsection}></View>

      <Image
        source={require("../assets/images/pattern.png")}
        style={styles.imageContainer1}
      ></Image>

      <View style={styles.overlay} />

      <View style={styles.topsection}>
        <Text style={styles.headerText}>PickApp</Text>
      </View>

      <View style={styles.whitesection}>
        <Text style={styles.signuptext}> Sign Up </Text>

        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.push("SignUpCustomer")}
        >
          <Text style={styles.loginText}> Customer </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signup}
          onPress={() => navigation.push("SignUpDriver")}
        >
          <Text style={styles.signupText}> Driver </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.arrowContainer}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../assets/images/back_arrow.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  imageContainer: {
    top: 0,
    width: "110%",
    height: "35%",
  },
  midsection: {
    backgroundColor: colors.blue,
    height: "30%",
  },
  imageContainer1: {
    // top: 0,
    width: "110%",
    height: "35%",
  },
  botmage: {
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    opacity: 0.8,
    // position: 'absolute'
  },
  topsection: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 60,
  },
  headerText: {
    textAlign: "center",
    fontFamily: "Montserrat_700Bold",
    color: colors.white,
    fontSize: 50,
    textAlign: "center",
  },
  whitesection: {
    position: "absolute",
    top: "27.5%",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    height: "45%",
    borderTopLeftRadius: 95,
    borderBottomRightRadius: 95,
    alignItems: "center",
  },
  signuptext: {
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
    color: colors.black,
    fontSize: 40,
    textAlign: "center",
    marginTop: "15%",
    marginBottom: "10%",
  },
  login: {
    width: 300,
    height: 50,
    backgroundColor: colors.blue,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: colors.white,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginBottom: 20,
    elevation: 10,
  },
  loginText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
  },
  signup: {
    width: 300,
    height: 50,
    backgroundColor: colors.white,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: colors.blue,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 10,
  },
  signupText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.blue,
    textAlign: "center",
  },
  arrow: {
    alignSelf: "flex-start",
    top: 55,
    marginLeft: 10,
  },
  arrowContainer: {
    position: "absolute",
    width: 32,
    height: 32,
  },
});
