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
import { Card } from "react-native-shadow-cards";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { ScrollView } from "react-native-gesture-handler";

export default function App({ navigation }) {
  const data = [
    {
      pickupLocation: "Madina Estate",
      pickupDate: "Tuesday, 4th March ",
      pickupTime: " 9:30 ",
      pickupCost: 19,
    },
    {
      pickupLocation: "Madina Estate",
      pickupDate: "Tuesday, 4th March ",
      pickupTime: "9:30 ",
      pickupCost: 19,
    },
  ];

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
        source={require("../../../assets/images/pattern.png")}
        style={styles.imageContainer}
      ></Image>
      <View style={styles.overlay} />
      <View style={styles.bottomContainer}>
        <ScrollView
          style={{ marginTop: 20 }}
          showsVerticalScrollIndicator={false}
        >
          {/*  */}
          {data?.map((item, itemIdx) => (
            <Fragment key={itemIdx}>
              <Card style={styles.pickupCard}>
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <View>
                      <View style={{ marginBottom: 12, flexDirection: "row" }}>
                        <Image
                          source={require("../../../assets/images/locationIcon.png")}
                          style={styles.cardImage}
                        ></Image>
                        <Text style={styles.blackText}>
                          {item.pickupLocation}
                        </Text>
                      </View>
                      <View style={{ marginBottom: 12, flexDirection: "row" }}>
                        <Image
                          source={require("../../../assets/images/calendarIcon.png")}
                          style={styles.cardImage}
                        ></Image>
                        <Text style={styles.blackText}>{item.pickupDate}</Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Image
                          source={require("../../../assets/images/clockIcon.png")}
                          style={styles.cardImage}
                        ></Image>
                        <Text style={styles.blackText}>{item.pickupTime}</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.currencyText}>GH₵</Text>
                      <Text style={styles.amountText}>{item.pickupCost}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </Card>
            </Fragment>
          ))}
        </ScrollView>

        {/* <Card style={styles.pickupCard}>
          <TouchableOpacity>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <View style={{ marginBottom: 12, flexDirection: "row" }}>
                  <Image
                    source={require("../../../assets/images/locationIcon.png")}
                    style={styles.cardImage}
                  ></Image>
                  <Text style={styles.blackText}>hshs</Text>
                </View>
                <View style={{ marginBottom: 12, flexDirection: "row" }}>
                  <Image
                    source={require("../../../assets/images/calendarIcon.png")}
                    style={styles.cardImage}
                  ></Image>
                  <Text style={styles.blackText}>hshs</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../../../assets/images/clockIcon.png")}
                    style={styles.cardImage}
                  ></Image>
                  <Text style={styles.blackText}>hshs</Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text>GH₵</Text>
                <Text>19</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Card> */}
      </View>

      <Text style={styles.headerText}> Pickup History</Text>

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
    // height: "65%",
    height: 0.4 * screen.height + 15,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    opacity: 0.8,
    height: 0.5 * screen.height,
  },
  bottomContainer: {
    position: "absolute",
    height: 0.7 * screen.height,
    // bottom: 0,
    top: 0.3 * screen.height,
    width: "100%",
    backgroundColor: colors.white,
    // backgroundColor: "red",
    borderTopRightRadius: 95,
    paddingTop: 35,
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
    top: 0.15 * screen.height,
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
  blackText: {
    // marginLeft: 20,
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    // marginBottom: 20,
  },
  greyText: {
    marginLeft: 20,
    fontFamily: "Montserrat_400Regular",
    fontSize: 12,
    color: colors.grey,
    marginBottom: 5,
  },
  pickupCard: {
    marginHorizontal: 20,
    height: 115,
    borderRadius: 15,
    marginTop: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    elevation: 5,
    marginBottom: 10,
  },
  cardImage: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  currencyText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.blue,
    marginTop: 15,
  },
  amountText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 60,
    color: colors.blue,
    marginLeft: 5,
  },
});
