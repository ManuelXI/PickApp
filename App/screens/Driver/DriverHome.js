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
  // let arrivalTime = "10 minutes";
  let tripCost = 19;
  let ratingValue = 4.0;
  let driverName = "Maxwell Eduful";
  let driverID = "userID 1";

  const [onlineStatus, setOnlineStatus] = useState(false);

  const [region, setRegion] = React.useState({
    // latitude: 37.78825,
    // longitude: -122.4324,
    latitude: 5.64030051333324,
    longitude: -0.18504392331461603,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [driverRegion, setDriverRegion] = React.useState({
    // latitude: 37.78825,
    // longitude: -122.4324,
    latitude: 5.637384972195574,
    longitude: -0.18490393066694813,

    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  // const [status, setStatus] = useState(0);
  // const [modalOpen, setModalOpen] = useState(false);

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
            latitude: driverRegion.latitude,
            longitude: driverRegion.longitude,
          }}
          pinColor={colors.blue}
        >
          <View>
            <Image
              source={require("../../assets/images/car_top.png")}
              style={{
                height: 60,
                width: 40,
                transform: [
                  {
                    rotate: "180  deg",
                  },
                ],
              }}
            ></Image>
            {/* <Text>Location</Text> */}
          </View>
          <Callout>
            <Text> My Location </Text>
          </Callout>
        </Marker>
      </MapView>

      {/* <View style={{ flex: 1, backgroundColor: "black", opacity: 0.7 }}></View> */}

      <Card style={styles.pickupContainer}>
        {onlineStatus === false && (
          <TouchableOpacity
            style={styles.xButton}
            onPress={() => setOnlineStatus(true)}
          >
            <Text style={styles.whiteText}>Go Online</Text>
          </TouchableOpacity>
        )}
        {onlineStatus === true && (
          <TouchableOpacity
            style={styles.xButton}
            onPress={() => setOnlineStatus(false)}
          >
            <Text style={styles.whiteText}>Go Offline</Text>
          </TouchableOpacity>
        )}
      </Card>

      <Card style={styles.pickupContainer1}>
        <Text style={styles.blackText2}>Hello, Maxwell...</Text>
      </Card>

      <Modal
        visible={onlineStatus}
        animationType="slide"
        transparent={true}
        hasBackdrop={true}
        backdropColor={"black"}
        backdropOpacity={0.7}
      >
        <View
          style={{ flex: 1, backgroundColor: "black", opacity: 0.5 }}
        ></View>

        <View
          style={{
            height: 200,
            width: 300,
            borderWidth: 2,
            borderColor: colors.white,
            backgroundColor: colors.blue,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 16,
            top: screen.height / 2 - 100,
            position: "absolute",
            flexDirection: "column",
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.whiteText}>
              {" "}
              Emmanuel Mortey requested a pickup{" "}
            </Text>
            {/* <Text style={styles.whiteText}> Limann Hostel </Text> */}
            <Text style={styles.whiteText}> 1 Bin </Text>
            <Text style={styles.whiteText}> Plastic </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                width: 105,
                height: 50,
                borderWidth: 2,
                borderColor: colors.white,
                backgroundColor: colors.blue,
                justifyContent: "center",
                elevation: 10,
                marginTop: 15,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                marginRight: 15,
                borderBottomRightRadius: 12,
              }}
              // onPress={() => setModalOpen(false)}
              // onPress={() => navigation.push("OrderPage")}
              onPress={() => navigation.push("PickupCard")}
            >
              <Text style={styles.whiteText}>Accept Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderWidth: 3,
                borderColor: colors.blue,
                backgroundColor: colors.white,
                justifyContent: "center",
                elevation: 10,
                marginTop: 15,
                borderTopLeftRadius: 12,
                borderTopRightRadius: 12,
                borderBottomRightRadius: 12,
                alignContent: "center",
                justifyContent: "center",
              }}
              onPress={() => setOnlineStatus(false)}
              // onPress={() => navigation.push("HomeCustomer")}
            >
              <Image
                source={require("../../assets/images/xIcon.png")}
                style={{
                  height: 27,
                  width: 27,
                  tintColor: colors.blue,
                  alignSelf: "center",
                  justifyContent: "center",
                }}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* <View
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
      </View> */}
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
    height: 90,
    backgroundColor: colors.white,
    width: screen.width,
    alignSelf: "center",
    // borderTopRightRadius: 85,
    borderTopLeftRadius: 85,
    elevation: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  pickupContainer1: {
    position: "absolute",
    top: 0,
    // marginLeft: 10,
    // marginRight: 10,
    height: 95,
    backgroundColor: colors.white,
    width: screen.width,
    alignSelf: "center",
    borderBottomRightRadius: 85,
    // borderTopRightRadius: 85,
    // borderTopLeftRadius: 85,
    elevation: 10,
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
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
    width: 105,
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
    alignSelf: "center",
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
    height: screen.height + Constants.statusBarHeight - 60,
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
    fontSize: 28,
    fontFamily: "Montserrat_400Regular",
    color: colors.black,
    // top: 5,
    textAlign: "center",
    // paddingTop: 5,
  },
});
