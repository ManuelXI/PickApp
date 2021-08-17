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
      <StatusBar style="light" />
      <Image
        source={require("../../../assets/images/TextilesImage.jpg")}
        style={styles.imageContainer}
      ></Image>
      <View style={styles.overlay} />
      <View style={styles.bottomContainer}>
        <Text
          style={{
            marginLeft: 20,
            marginRight: 20,
            // marginBottom: 20,
            textAlign: "center",
            fontFamily: "Montserrat_400Regular",
            fontSize: 15,
          }}
        >
          Paper is a thin sheet material produced by mechanically or chemically
          processing cellulose fibres derived from wood, rags, grasses or other
          vegetable sources in water, draining the water through fine mesh
          leaving the fibre evenly distributed on the surface, followed by
          pressing and drying.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("SelectQuantity")}
        >
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: "absolute",
          top: screen.height * 0.55 - 10,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../../assets/images/RecyclableIcon.png")}
          style={styles.iconHeader}
        ></Image>
        <Text style={styles.iconText}> Recyclable </Text>
      </View>
      <Text style={styles.headerText}>Clothing and Textiles</Text>

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
    height: "67%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    opacity: 0.3,
    height: "67%",
  },
  bottomContainer: {
    position: "absolute",
    height: "45%",
    // bottom: 0,
    top: "55%",
    width: "100%",
    backgroundColor: colors.white,
    // backgroundColor: "red",
    borderTopRightRadius: 95,
    justifyContent: "center",
  },
  button: {
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
    fontSize: 60,
    top: "20%",
    color: colors.white,
    textAlign: "center",
  },
});
