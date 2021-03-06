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
import Constants from "expo-constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import colors from "../../constants/colors";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

const screen = Dimensions.get("window");

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
      <StatusBar style="auto" />

      <View>
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
            style={{ tintColor: colors.black }}
            source={require("../../assets/images/back_arrow.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      {/* <View style={{ top: Constants.statusBarHeight + 42 }}>
        <GooglePlacesAutocomplete
          placeholder="Where to"
          styles={{
            container: {
              flex: 0,
              width: screen.width - 88,
              alignSelf: "center",
            },
            textInput: {
              fontSize: 15,
              fontFamily: "Montserrat_400Regular",
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          enablePoweredByContainer={false}
        />
      </View> */}

      <View style={{ flex: 1 }}>
        <View style={{ position: "relative" }}>
          <View
            style={{
              marginTop: 15,
              flexDirection: "row",
              marginHorizontal: 20,
              width: screen.width - 40,
              position: "relative",
              top: Constants.statusBarHeight + 42,
              backgroundColor: colors.white,
              alignItems: "center",
              elevation: 5,
              height: 50,
              borderRadius: 12,
              // zIndex: -10,
              // flex: 1,
            }}
          >
            <Image
              style={{
                tintColor: colors.black,
                width: 23,
                height: 23,
                marginLeft: 10,
                marginRight: 15,
              }}
              source={require("../../assets/images/searchIcon.png")}
            ></Image>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            // top: Constants.statusBarHeight + 60,
            top: Constants.statusBarHeight + 60,
            marginLeft: 63,
            zIndex: 10,
          }}
        >
          <GooglePlacesAutocomplete
            placeholder="Enter your location"
            styles={{
              container: {
                flex: 0,
                width: screen.width - 88,
                alignSelf: "center",
                backgroundColor: "red",
              },
              textInput: {
                fontSize: 15,
                fontFamily: "Montserrat_400Regular",
                color: colors.black,
              },
            }}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            enablePoweredByContainer={false}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: colors.white,
  },
});
