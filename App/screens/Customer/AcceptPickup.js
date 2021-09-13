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
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App({ navigation }) {
  let arrivalTime = "10 minutes";
  let tripCost = 19;

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
        region={region}
        // region={{
        //   latitude: region.latitude,
        //   longitude: region.longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
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
      </MapView>

      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        enablePoweredByContainer={false}
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
          setStatus(1);
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
          components: "country:gh",
          // types: "establishment",
          // radius: 30000,
          // location: `${region.latitude}, ${region.longitude}`,
        }}
        styles={{
          container: {
            flex: 0,
            position: "absolute",
            width: screen.width - 40,
            zIndex: 1,
            top: Constants.statusBarHeight + 52,
            elevation: 10,
            marginLeft: 20,
            marginRight: 20,
            alignSelf: "center",
          },
          listView: { backgroundColor: "white" },
          textInput: {
            fontSize: 15,
            fontFamily: "Montserrat_400Regular",
            color: colors.black,
            height: 50,
            borderRadius: 16,
            elevation: 5,
          },
        }}
      />

      {status === 1 && (
        <Fragment>
          <TouchableOpacity
            style={{
              width: 300,
              height: 50,
              backgroundColor: colors.blue,
              borderWidth: 3,
              borderColor: colors.white,
              borderTopLeftRadius: 12,
              borderBottomLeftRadius: 12,
              borderBottomRightRadius: 12,
              elevation: 5,
              alignContent: "center",
              justifyContent: "center",
              // marginTop: 15,
              alignSelf: "center",
              bottom: 60,
              // position: 'absolute'
            }}
            onPress={() => setModalOpen(true)}
          >
            <Text style={styles.whiteText}> Confirm Location </Text>
          </TouchableOpacity>
        </Fragment>
      )}

      <Modal
        visible={modalOpen}
        animationType="slide"
        transparent={true}
        hasBackdrop={true}
        backdropColor={"black"}
        backdropOpacity={0.7}
      >
        <View
          style={{ flex: 1, backgroundColor: "black", opacity: 0.7 }}
        ></View>

        <Card style={styles.pickupContainer}>
          <View>
            <View style={styles.outerBox}>
              <View
                style={{
                  height: 70,
                  width: 300,
                  borderRadius: 16,
                  backgroundColor: colors.white,
                  alignSelf: "center",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginLeft: 15 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "Montserrat_400Regular",
                      color: colors.blue,
                    }}
                  >
                    Estimated time of arrival
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: "Montserrat_400Regular",
                      color: colors.black,
                    }}
                  >
                    {" "}
                    {arrivalTime}{" "}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginRight: 15 }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Montserrat_400Regular",
                      color: colors.blue,
                      top: 14,
                    }}
                  >
                    $
                  </Text>
                  <Text
                    style={{
                      fontSize: 60,
                      fontFamily: "Montserrat_400Regular",
                      color: colors.blue,
                    }}
                  >
                    {tripCost}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity style={styles.cashOptions}>
              <Text style={styles.blackText}> Cash </Text>
              <Image
                source={require("../../assets/images/CashArrow.png")}
                style={{ height: 27, width: 27 }}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.xButton}
              onPress={() => setModalOpen(false)}
            >
              <Image
                source={require("../../assets/images/xIcon.png")}
                style={{ height: 27, width: 27 }}
              ></Image>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.opButton}
            onPress={() => navigation.push("ArrivingScreen")}
          >
            <Text style={styles.whiteText}> Order Pickup </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.spButton}
            onPress={() => navigation.push("SelectTimeSlot")}
          >
            <Text style={styles.spText}> Schedule Pickup </Text>
          </TouchableOpacity>
        </Card>
      </Modal>

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
          source={require("../../assets/images/back_arrow.png")}
          style={{ tintColor: colors.black }}
        ></Image>
      </TouchableOpacity>
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
    marginLeft: 10,
    marginRight: 10,
    height: 300,
    backgroundColor: colors.white,
    width: screen.width - 20,
    alignSelf: "center",
    borderTopRightRadius: 95,
    elevation: 10,
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
  whiteText: {
    fontSize: 15,
    fontFamily: "Montserrat_400Regular",
    color: colors.white,
    textAlign: "center",
  },
  opButton: {
    width: 300,
    height: 50,
    backgroundColor: colors.blue,
    borderWidth: 3,
    borderColor: colors.white,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 5,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 15,
    alignSelf: "center",
  },
  spButton: {
    width: 300,
    height: 50,
    backgroundColor: colors.white,
    borderWidth: 3,
    borderColor: colors.blue,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    elevation: 5,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 15,
    alignSelf: "center",
  },
  spText: {
    fontSize: 15,
    fontFamily: "Montserrat_400Regular",
    color: colors.black,
    textAlign: "center",
  },
  map: {
    width: screen.width,
    // height: screen.height,
    height: screen.height + Constants.statusBarHeight,
    // height: screen.height + 50,
  },
});
