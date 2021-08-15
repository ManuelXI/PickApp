import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import colors from "../../../constants/colors";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App({ navigation }) {
  let arrivalTime = "10 minutes";
  let tripCost = 19;

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

      <Modal
        visible={modalOpen}
        animationType="slide"
        transparent={true}
        hasBackdrop={true}
        backdropColor={"black"}
        backdropOpacity={0.7}
      >
        <View
          style={{
            height: 110,
            width: 250,
            borderWidth: 2,
            borderColor: colors.blue,
            backgroundColor: colors.white,
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 16,
            top: screen.height / 2 - 100,
          }}
        >
          <Text style={styles.blackText}> Booking Sucessful </Text>
          <TouchableOpacity
            style={{
              width: 75,
              height: 50,
              borderWidth: 2,
              borderColor: colors.white,
              backgroundColor: colors.blue,
              justifyContent: "center",
              elevation: 5,
              marginTop: 15,
              borderTopLeftRadius: 12,
              borderTopRightRadius: 12,
              borderBottomRightRadius: 12,
            }}
            onPress={() => setModalOpen(false)}
          >
            <Text style={styles.whiteText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Modal>

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
                    fontSize: 15,
                    fontFamily: "Montserrat_400Regular",
                    color: colors.blue,
                    top: 14,
                  }}
                >
                  GH₵
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
              source={require("../../../assets/images/CashArrow.png")}
              style={{ height: 27, width: 27 }}
            ></Image>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.opButton}
          onPress={() => setModalOpen(true)}
        >
          <Text style={styles.whiteText}> Confirm Booking </Text>
        </TouchableOpacity>
      </Card>

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
    height: 250,
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
    width: 300,
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
    // marginRight: 30,
    alignSelf: "center",
  },
  blackText: {
    fontSize: 15,
    fontFamily: "Montserrat_400Regular",
    color: colors.black,
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
});
