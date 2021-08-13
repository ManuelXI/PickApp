import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
const screen = Dimensions.get("window");
import Constants from "expo-constants";
import { Card } from "react-native-shadow-cards";
import colors from "../../constants/colors";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App() {
  let arrivalTime = "10 minutes";
  let tripCost = 19;

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

        <View style={{ marginTop: 15 }}>
          <TouchableOpacity style={styles.cashOptions}>
            <Text style={styles.blackText}> Cash </Text>
            <Image
              source={require("../../assets/images/CashArrow.png")}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </Card>
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
  },
  blackText: {
    fontSize: 15,
    fontFamily: "Montserrat_400Regular",
    color: colors.black,
  },
});
