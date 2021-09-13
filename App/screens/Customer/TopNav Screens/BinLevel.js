import React, { Fragment, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import colors from "../../../constants/colors";
import { Card } from "react-native-shadow-cards";
import { Icon, InlineIcon } from "@iconify/react";
import arrowDown from "@iconify/icons-bi/arrow-down";
import Wave from "../../../components/Wave";

const screen = Dimensions.get("window");

let design_height = 120;
let design_curve = 70;
let box_height1 = 200 * 1.5;
let box_height2 = 200;
let box_width = screen.width - 40;
let wH = screen.width - 80;

import { ScrollView } from "react-native-gesture-handler";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

export default ({ navigation }) => {
  const [waveHeight, setWaveHeight] = useState(0.4 * wH);

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
      <StatusBar barStyle="light-content" />

      <TouchableOpacity onPress={() => navigation.push("AcceptPickup")}>
        <View
          style={{
            //   backgroundColor: "red",
            //   width: screen.width - 80,
            //   height: 150,
            //   bottom: screen.height / 2 + wH / 2,
            top: 50,
            elevation: 10,
            width: screen.width - 80,
            height: screen.width - 80,
            alignSelf: "center",
            elevation: 10,
          }}
        >
          <View style={_styles.container}>
            <TouchableHighlight
              onPress={() => {
                // Stop Animation
                this._waveRect && this._waveRect.stopAnim();

                // set water baseline height
                this._waveRect && this._waveRect.setWaterHeight(70);

                // reset wave effect
                this._waveRect &&
                  this._waveRect.setWaveParams([
                    { A: 20, T: 190, fill: "#FF9F2E" },
                    { A: 25, T: 150, fill: "#F08200" },
                    { A: 30, T: 110, fill: "#B36100" },
                  ]);
              }}
            >
              <Wave
                ref={(ref) => (this._waveRect = ref)}
                style={_styles.wave}
                H={waveHeight}
                waveParams={[
                  { A: 20, T: 190, fill: "#62c2ff" },
                  { A: 25, T: 150, fill: "#0087dc" },
                  { A: 30, T: 110, fill: "#1aa7ff" },
                ]}
                animated={true}
              />
            </TouchableHighlight>
          </View>

          <View
            style={{
              backgroundColor: colors.black,
              opacity: 0.5,
              flex: 1,
              position: "absolute",
              // top: 0,
              height: wH,
              width: wH,
              alignSelf: "center",
              borderRadius: 15,
              alignItems: "center",
            }}
          ></View>
          <Text
            style={{
              color: colors.white,
              fontSize: 70,
              textAlign: "center",
              position: "absolute",
              fontFamily: "Montserrat_400Regular",
              // top: wH / 2,
              // left: 0,
              right: 10,
              bottom: 10,
            }}
          >
            40%
          </Text>
          <Text
            style={{
              color: colors.grey,
              fontSize: 12,
              textAlign: "center",
              position: "absolute",
              fontFamily: "Montserrat_400Regular",
              // top: wH / 2,
              // left: 0,
              right: 10,
              bottom: 5,
            }}
          >
            *Bin Capacity
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.bottomDesign}>
        <Image
          source={require("../../../assets/images/pattern.png")}
          style={styles.bottomUnder}
        />
        <View style={styles.bottomTop}></View>
        <View style={styles.middleUnder}></View>
        <Image
          source={require("../../../assets/images/pattern.png")}
          style={styles.middleTop}
        />
        <Image
          source={require("../../../assets/images/pattern.png")}
          style={styles.topUnder}
        />
        <View style={styles.topTop}></View>
      </View>
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: StyleSheet.hairlineWidth,
  },
  wave: {
    // height: 180,
    width: screen.width - 80,
    height: screen.width - 80,
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 15,
  },
  waveBall: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: "hidden",
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: colors.white,
    // backgroundColor: "red",
  },
  container1: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth,
  },
  wave: {
    width: 100,
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: "white",
  },
  waveBall: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: "hidden",
  },
  bottomDesign: {
    flex: 1,
    backgroundColor: colors.red,
    justifyContent: "flex-end",
    zIndex: -10,
  },
  bottomUnder: {
    width: "100%",
    height: design_height,
    // top: screen.height - 120,
    // top: screen.height - 60,
    position: "absolute",
    bottom: 0,
  },
  bottomTop: {
    width: "100%",
    height: design_height,
    // bottom: 0,
    position: "absolute",
    // top: screen.height - design_height,
    backgroundColor: colors.blue,
    borderTopLeftRadius: design_curve,
    bottom: 0,
  },
  middleUnder: {
    width: "100%",
    height: design_height,
    // bottom: 0,
    position: "absolute",
    // top: screen.height - (design_height * 2),
    backgroundColor: colors.blue,
    borderTopLeftRadius: design_curve,
    bottom: design_height,
  },
  middleTop: {
    width: "100%",
    height: design_height,
    // bottom: 0,
    position: "absolute",
    // top: screen.height - (design_height * 2),
    backgroundColor: colors.blue,
    borderBottomRightRadius: design_curve,
    borderTopLeftRadius: design_curve,
    bottom: design_height,
  },
  topUnder: {
    width: "100%",
    height: design_height,
    // bottom: 0,
    position: "absolute",
    // top: screen.height - (design_height * 3),
    backgroundColor: colors.blue,
    bottom: design_height * 2,
  },
  topTop: {
    width: "100%",
    height: design_height,
    // bottom: 0,
    position: "absolute",
    // top: screen.height - (design_height * 3),
    backgroundColor: colors.white,
    // backgroundColor: 'red',
    borderBottomRightRadius: design_curve,
    bottom: design_height * 2,
  },
  card1: {
    height: box_height1,
    width: box_width,
    borderRadius: 15,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    alignSelf: "center",
  },
  cardinner: {
    height: box_height1,
    width: box_width,
    borderRadius: 15,
  },
  imageContainer: {
    height: box_height1,
    width: box_width,
    borderRadius: 15,
  },
  imageContainer2: {
    height: box_height2,
    width: box_width,
    borderRadius: 15,
  },
  text: {
    position: "absolute",
    bottom: 5,
    right: 3,
    color: colors.white,
    fontFamily: "Montserrat_700Bold",
    // fontWeight: "bold",
    fontSize: 18,
    textAlign: "right",
  },
  text1: {
    position: "absolute",
    bottom: 5,
    right: 3,
    color: colors.black,
    fontFamily: "Montserrat_700Bold",
    // fontWeight: "bold",
    fontSize: 18,
    textAlign: "right",
  },
});
