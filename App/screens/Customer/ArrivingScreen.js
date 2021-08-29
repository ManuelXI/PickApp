import { StatusBar } from "expo-status-bar";
import React, { useState, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
} from "react-native";
const screen = Dimensions.get("window");
import Constants from "expo-constants";
import { Card } from "react-native-shadow-cards";
import colors from "../../constants/colors";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import MapView, { Callout, Marker } from "react-native-maps";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App({ navigation }) {
  let arrivalTime = "10 minutes";
  let tripCost = 19;
  let ratingValue = 4.5;
  let driverName = "Mark P. Kwenu";
  let driverID = "userID 1";

  const [region, setRegion] = React.useState({
    // latitude: 37.78825,
    // longitude: -122.4324,
    latitude: 5.614818,
    longitude: -0.205874,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [status, setStatus] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

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
      {/* <Text> sfhdhshx </Text> */}

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          pinColor={colors.blue}
        >
          <View>
            <Image
              source={require("../../assets/images/mapMarker.png")}
              style={{ height: 60, width: 40 }}
            ></Image>
            {/* <Text>Location</Text> */}
          </View>
          <Callout>
            <Text> My Location </Text>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          pinColor={colors.blue}
        >
          <View>
            <Image
              source={require("../../assets/images/car_top.png")}
              style={{ height: 60, width: 40 }}
            ></Image>
            {/* <Text>Location</Text> */}
          </View>
          <Callout>
            <Text> Driver's Location </Text>
          </Callout>
        </Marker>
      </MapView>

      {/* <View style={{ flex: 1, backgroundColor: "black", opacity: 0.7 }}></View> */}

      <Card style={styles.pickupContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "baseline",
            // backgroundColor: "red",
            // paddingBottom: -20,
            top: -45,
          }}
        >
          <View style={{}}>
            <Image
              source={require("../../assets/images/driverImage.jpg")}
              style={{
                height: 130,
                width: 130,
                borderWidth: 3,
                borderColor: colors.blue,
                borderRadius: 15,
                borderTopRightRadius: 47,
                // borderTopLeftRadius: 47,
              }}
            ></Image>
          </View>
          <View
            style={{
              width: 150,
              height: 75,
              borderRadius: 16,
              // elevation: 0.5,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              marginRight: 40,
              top: -15,
              backgroundColor: "#FBFAFA",
              // marginTop: -20,
              // backgroundColor: colors.blue,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: 140,
                height: 65,
                backgroundColor: colors.white,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../../assets/images/starIcon.png")}
                style={{
                  height: 45,
                  width: 45,
                }}
              ></Image>
              <Text style={styles.greyText}> {ratingValue} </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "red",
            top: -25,
          }}
        >
          <View>
            <Text style={styles.blackText}> {driverName} </Text>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={styles.blackText2}>{driverID}</Text>
            <Text style={styles.blackText1}>Pickup Agent</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity style={styles.xButton1}>
            <Image
              source={require("../../assets/images/callIcon.png")}
              style={{ height: 27, width: 27 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.xButton1}>
            <Image
              source={require("../../assets/images/messageIcon.png")}
              style={{ height: 27, width: 27 }}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.xButton}>
            <Image
              source={require("../../assets/images/xIcon.png")}
              style={{ height: 27, width: 27 }}
            ></Image>
          </TouchableOpacity>
        </View>
      </Card>

      <View
        style={{
          position: "absolute",
          top: Constants.statusBarHeight + 15,
          alignSelf: "center",
        }}
      >
        <Text
          style={{
            fontSize: 30,
            fontFamily: "Montserrat_400Regular",
            color: colors.black,
          }}
        >
          {arrivalTime}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  pickupContainer: {
    position: "absolute",
    bottom: 0,
    // marginLeft: 10,
    // marginRight: 10,
    height: 250,
    backgroundColor: colors.white,
    width: screen.width,
    alignSelf: "center",
    borderTopRightRadius: 95,
    elevation: 10,
    paddingHorizontal: 15,
  },
  outerBox: {
    height: 74,
    width: 304,
    // elevation: 5,
    marginTop: 20,
    borderRadius: 16,
    backgroundColor: "#FBFAFA",
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingBottom: 2,
  },
  cashOptions: {
    flexDirection: "row",
    width: 220,
    height: 50,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.blue,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 5,
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    marginRight: 30,
  },
  blackText: {
    fontSize: 15,
    fontFamily: "Montserrat_400Regular",
    color: colors.black,
  },
  xButton: {
    width: 55,
    height: 50,
    backgroundColor: colors.blue,
    borderWidth: 3,
    borderColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  xButton1: {
    width: 55,
    height: 50,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.blue,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteText: {
    fontSize: 15,
    fontFamily: "Montserrat_400Regular",
    color: colors.white,
    textAlign: "center",
  },
  map: {
    width: screen.width,
    // height: screen.height,
    height: screen.height + Constants.statusBarHeight - 180,
    // height: screen.height + 50,
  },
  greyText: {
    fontSize: 40,
    fontFamily: "Montserrat_400Regular",
    color: colors.grey,
  },
  blackText: {
    fontSize: 18,
    fontFamily: "Montserrat_400Regular",
    color: colors.black,
  },
  blackText1: {
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    color: colors.grey,
  },
  blackText2: {
    fontSize: 16,
    fontFamily: "Montserrat_400Regular",
    color: colors.black,
  },
});
