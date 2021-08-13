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
  Platform,
} from "react-native";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
const screen = Dimensions.get("window");
import Constants from "expo-constants";
import ModalDropdown from "react-native-modal-dropdown";
import colors from "../../../constants/colors";
import DateTimePicker from "@react-native-community/datetimepicker";

const data = [
  {
    name: "7:30 - 9:30",
  },
  {
    name: "9:30 - 11:30",
  },
  {
    name: "11:30 - 13:30",
  },
  {
    name: "13:30 - 15:30",
  },
  {
    name: "15:30 - 17:30",
  },
  {
    name: "17:30 - 19:30",
  },
];

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

export default function App({ navigation }) {
  const [status, setStatus] = useState("7:30 - 9:30");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(fDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

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
      <Image
        source={require("../../../assets/images/hourglass.jpg")}
        style={styles.imageContainer}
      ></Image>
      <View style={styles.overlay} />
      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => showMode("date")}>
            <Image
              source={require("../../../assets/images/calendarIcon.png")}
              style={styles.smallIcons}
            ></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showMode("date")}>
            <Text
              style={{
                //   marginLeft: 80,
                fontFamily: "Montserrat_400Regular",
                fontSize: 20,
                textDecorationLine: "underline",
              }}
            >
              {" "}
              {text}
            </Text>
          </TouchableOpacity>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}

        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontFamily: "Montserrat_400Regular",
            fontSize: 12,
            color: colors.lightblue,
          }}
        >
          Select Date
        </Text>
        <View style={styles.separator}></View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ marginTop: 15 }}>
            <Image
              source={require("../../../assets/images/clockIcon.png")}
              style={styles.smallIcons}
            ></Image>
          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            {/*  */}
            {data?.map((item, itemIdx) => (
              <Fragment key={itemIdx}>
                <View>
                  <TouchableOpacity
                    onPress={() => setStatus(item.name)}
                    style={{
                      width: 115,
                      height: 30,
                      backgroundColor:
                        status === item.name ? colors.blue : colors.white,
                      marginTop: 15,
                      borderWidth: 1,
                      borderRadius: 18,
                      borderColor:
                        status === item.name ? colors.white : colors.black,
                      //   alignSelf: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      elevation: status === item.name ? 5 : 0,
                      marginRight: 20,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Montserrat_400Regular",
                        fontSize: 15,
                        color:
                          status === item.name ? colors.white : colors.black,
                        fontFamily: "Montserrat_400Regular",
                      }}
                    >
                      {" "}
                      {item.name}{" "}
                    </Text>
                  </TouchableOpacity>
                </View>
              </Fragment>
            ))}
          </View>
        </View>

        <Text
          style={{
            marginLeft: 20,
            marginTop: 15,
            fontFamily: "Montserrat_400Regular",
            fontSize: 12,
            color: colors.lightblue,
          }}
        >
          Select Time Slot
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.push("ConfirmBooking")}
        >
          <Text style={styles.buttonText}> Next </Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.headerText}>Select Time Slot </Text>

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
    height: "69%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    opacity: 0.7,
    height: "69%",
  },
  bottomContainer: {
    position: "absolute",
    height: 360,
    // bottom: 0,
    top: screen.height - 300,
    width: "100%",
    backgroundColor: colors.white,
    // backgroundColor: "red",
    borderTopRightRadius: 95,
    paddingTop: 20,
    // justifyContent: "center",
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: colors.blue,
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: colors.white,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    // marginBottom: 20,
    alignSelf: "center",
    top: 10,
    elevation: 10,
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
    top: "25%",
    color: colors.white,
  },
  separator: {
    backgroundColor: colors.grey,
    height: StyleSheet.hairlineWidth,
    // height: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    width: screen.width - 40,
  },
  smallIcons: {
    height: 36,
    width: 36,
    marginLeft: 20,
    marginRight: 24,
  },
});
