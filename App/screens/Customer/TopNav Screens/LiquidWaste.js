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
} from "react-native";
import colors from "../../../constants/colors";
import { Card } from "react-native-shadow-cards";
import { Icon, InlineIcon } from "@iconify/react";
import arrowDown from "@iconify/icons-bi/arrow-down";

const screen = Dimensions.get("window");

let design_height = 120;
let design_curve = 70;
let box_height1 = 200 * 1.5;
let box_height2 = 200;
let box_width = screen.width - 40;

import { ScrollView } from "react-native-gesture-handler";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

export default ({ navigation }) => {
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

      <ScrollView style={{ top: 5 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingBottom: 15,
            // alignItems: "center",
          }}
        >
          <Card style={styles.card1}>
            <TouchableOpacity onPress={() => navigation.push("SewageScreen")}>
              <Image
                source={require("../../../assets/images/SewageImage.jpg")}
                style={styles.imageContainer}
              ></Image>
              <Text style={styles.text}> Sewage </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView>

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
        {/* <View style={styles.design} >
              </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: colors.white,
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
