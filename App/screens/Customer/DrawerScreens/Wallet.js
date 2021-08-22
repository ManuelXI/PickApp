import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
const screen = Dimensions.get("window");
import Constants from "expo-constants";
import colors from "../../../constants/colors";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App({ navigation }) {
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
      <StatusBar style="light" />
      <Image
        source={require("../../../assets/images/walletImage.jpg")}
        style={styles.imageContainer}
      ></Image>
      <View style={styles.overlay} />
      <View style={styles.bottomContainer}>
        <View style={{ marginBottom: 10 }}>
          <TouchableOpacity
            style={styles.longButton}
            //   onPress={() => showMode("date")}
          >
            <Image
              source={require("../../../assets/images/cashIcon.png")}
              style={styles.smallIcons}
            ></Image>
            <Text style={styles.blackText}>Cash</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.blueText}>Add Payment Method</Text>
        </TouchableOpacity>

        <View style={styles.separator}></View>

        <View style={{ marginBottom: 10, marginTop: 15 }}>
          <TouchableOpacity
            style={styles.longButton}
            //   onPress={() => showMode("date")}
          >
            <Image
              source={require("../../../assets/images/voucherIcon.png")}
              style={styles.smallIcons}
            ></Image>
            <Text style={styles.blackText}>Voucher Codes</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.blueText}>Add Voucher Code</Text>
        </TouchableOpacity>

        <View style={styles.separator}></View>
        <View style={{ marginBottom: 10, marginTop: 15 }}>
          <TouchableOpacity
            style={styles.longButton}
            //   onPress={() => showMode("date")}
          >
            <Image
              source={require("../../../assets/images/promotionIcon.png")}
              style={styles.smallIcons}
            ></Image>
            <Text style={styles.blackText}>Promotions</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text style={styles.blueText}>Add Promo Code</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.headerText}>Wallet </Text>

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
    height: screen.height - 280,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    opacity: 0.8,
    height: "69%",
  },
  bottomContainer: {
    position: "absolute",
    height: 360,
    // bottom: 0,
    top: screen.height - 360,
    width: "100%",
    backgroundColor: colors.white,
    // backgroundColor: "red",
    borderTopRightRadius: 95,
    paddingTop: 20,
    // justifyContent: "center",
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
    top: (screen.height - 360) / 2,
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
  smallIcons: {
    height: 36,
    width: 36,
    marginLeft: 20,
    marginRight: 24,
  },
  blueText: {
    marginLeft: 20,
    marginTop: 15,
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    color: colors.lightblue,
  },
  blackText: {
    marginLeft: 0,
    // marginTop: 15,
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.black,
  },
  longButton: {
    flexDirection: "row",
    alignItems: "center",
    width: screen.width - 40,
  },
});
