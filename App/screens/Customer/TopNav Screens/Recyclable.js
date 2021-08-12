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
import Constants from "expo-constants";

const screen = Dimensions.get("window");

let design_height = 120;
let design_curve = 70;
let box_height1 = 180;
let box_height2 = 200;
let box_width = screen.width / 2 - 30;

import { ScrollView } from "react-native-gesture-handler";
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

export default ({ navigation }) => {
  // export const RecyclableList = ({ navigation }) => {
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

      <ScrollView style={{ top: Constants.statusBarHeight + 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingBottom: 15,
          }}
        >
          <Card style={styles.card1}>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/PaperImage.jpg")}
                style={styles.imageContainer}
              ></Image>
              <Text style={styles.text}> Paper </Text>
            </TouchableOpacity>
          </Card>
          <Card style={styles.card2}>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/PlasticBottlesImage.jpg")}
                style={styles.imageContainer2}
              ></Image>
              <Text style={styles.text}> Plastic Bottles </Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingBottom: 15,
          }}
        >
          <Card style={styles.card3}>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/MetalImage.jpg")}
                style={styles.imageContainer2}
              ></Image>
              <Text style={styles.text}> Metal </Text>
            </TouchableOpacity>
          </Card>
          <Card style={styles.card4}>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/WoodImage.jpg")}
                style={styles.imageContainer2}
              ></Image>
              <Text style={styles.text}> Wood </Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingBottom: 15,
          }}
        >
          <Card style={styles.card3}>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/GlassImage.jpg")}
                style={styles.imageContainer2}
              ></Image>
              <Text style={styles.text}> Glass </Text>
            </TouchableOpacity>
          </Card>
          <Card style={styles.card4}>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/CeramicsImage.jpg")}
                style={styles.imageContainer2}
              ></Image>
              <Text style={styles.text}> Ceramics </Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            paddingBottom: 15,
          }}
        >
          <Card style={styles.card3}>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/TextilesImage.jpg")}
                style={styles.imageContainer2}
              ></Image>
              <Text style={styles.text}> Clothing and Textiles </Text>
            </TouchableOpacity>
          </Card>
          <Card style={styles.card4}>
            <TouchableOpacity>
              <Image
                source={require("../../../assets/images/CeramicsImage.jpg")}
                style={styles.imageContainer2}
              ></Image>
              <Text style={styles.text}> Plastic Sachets </Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={{ height: 50 }}></View>
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
    marginRight: 10,
    marginLeft: 20,
  },
  card2: {
    height: box_height2,
    width: box_width,
    borderRadius: 15,
    marginRight: 20,
    marginLeft: 10,
  },
  card3: {
    height: box_height2,
    width: box_width,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 20,
  },
  card4: {
    height: box_height2,
    width: box_width,
    borderRadius: 15,
    marginRight: 20,
    marginLeft: 10,
    marginTop: 15,
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
    // backgroundColor: "#696969",
  },
});
