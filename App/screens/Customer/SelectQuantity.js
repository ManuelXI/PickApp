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
import colors from "../../constants/colors";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
const screen = Dimensions.get("window");
import Constants from "expo-constants";
import ModalDropdown from "react-native-modal-dropdown";

const data = [
  {
    name: "Less than a Bin",
  },
  {
    name: "1 Bin < ... < 3 Bins",
  },
  {
    name: "More than 3 Bins",
  },
];

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App({ navigation }) {
  const [status, setStatus] = useState("Less than a Bin");

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

        {/*  */}
        {data?.map((item, itemIdx) => (
          <Fragment key={itemIdx}>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                onPress={() => setStatus(item.name)}
                style={{
                  width: 210,
                  height: 30,
                  backgroundColor:
                    status === item.name ? colors.blue : colors.white,
                  marginTop: 15,
                  borderWidth: 1,
                  borderRadius: 18,
                  borderColor:
                    status === item.name ? colors.white : colors.black,
                  alignSelf: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  elevation: status === item.name ? 5 : 0,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Montserrat_400Regular",
                    fontSize: 15,
                    color: status === item.name ? colors.white : colors.black,
                    fontFamily: "Montserrat_400Regular",
                  }}
                >
                  {" "}
                  {item.name}{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </Fragment>
        ))}

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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("AcceptPickup")}
        >
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
    height: "69%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    opacity: 0.8,
    height: "69%",
  },
  bottomContainer: {
    position: "absolute",
    height: 300,
    // bottom: 0,
    top: screen.height - 300,
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
    borderWidth: 3,
    borderColor: colors.white,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    // marginBottom: 20,
    alignSelf: "center",
    top: 15,
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
});
