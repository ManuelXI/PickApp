import { Fragment, useState } from "react";
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
import colors from "../../../constants/colors";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
const screen = Dimensions.get("window");
import Constants from "expo-constants";
import ModalDropdown from "react-native-modal-dropdown";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App({ navigation }) {
  const [status, setStatus] = useState("Less than a Bin");
  let fName = "Zhuri";
  let lName = "Mortey";
  let email = "zhumortey@gmail.com";

  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../../../assets/images/pattern.png")}
        style={styles.imageContainer}
      ></Image>
      <View style={styles.overlay} />
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={{
            height: 140,
            width: 140,
            borderRadius: 3,
            color: colors.blue,
          }}
        >
          <Image
            source={require("../../../assets/images/SQbackground.jpg")}
            style={styles.profileImage}
          ></Image>
        </TouchableOpacity>

        <View style={styles.separator}></View>

        <Text style={styles.greyText}> First Name </Text>
        <TouchableOpacity>
          <Text style={styles.blackText}>{fName}</Text>
        </TouchableOpacity>

        {/* <View style={styles.separator}></View> */}

        <Text style={styles.greyText}> Last Name </Text>
        <TouchableOpacity>
          <Text style={styles.blackText}>{lName}</Text>
        </TouchableOpacity>

        <Text style={styles.greyText}> Email </Text>
        <TouchableOpacity>
          <Text style={styles.blackText}>{email}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.headerText}> Edit Account</Text>

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
        <Image
          source={require("../../../assets/images/back_arrow.png")}
        ></Image>
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
    height: "65%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    opacity: 0.8,
    height: "65%",
  },
  bottomContainer: {
    position: "absolute",
    height: 350,
    // bottom: 0,
    top: screen.height - 350,
    width: "100%",
    backgroundColor: colors.white,
    // backgroundColor: "red",
    borderTopRightRadius: 95,
    // paddingTop: 30,
    // justifyContent: "center",
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
    top: (screen.height - 350) / 2 - 15,
    color: colors.white,
  },
  separator: {
    backgroundColor: colors.grey,
    height: StyleSheet.hairlineWidth,
    // height: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    width: screen.width - 40,
    marginBottom: 20,
  },
  profileImage: {
    height: 140,
    width: 140,
    borderRadius: 140,
    marginLeft: 20,
    top: -20,
  },
  blackText: {
    marginLeft: 20,
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    marginBottom: 20,
  },
  greyText: {
    marginLeft: 20,
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    color: colors.grey,
    marginBottom: 5,
  },
});
