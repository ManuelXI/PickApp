import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import colors from "../../constants/colors";

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-shadow-cards";

const screen = Dimensions.get("window");

let box_height1 = 180;
let box_height2 = 200;
let box_width = screen.width / 2 - 30;

export default ({ navigation }) => {
  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light" />
      <Image
        source={require("../../assets/images/pattern.png")}
        style={styles.imageContainer}
      ></Image>
      <View style={styles.midsection}></View>

      <View style={styles.overlay} />

      <View style={styles.topsection}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      <View style={styles.whitesection}>
        <Text style={styles.blackText}> Select Vehicle Type </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Card style={styles.card1}>
            <TouchableOpacity
              onPress={() => navigation.push("MixedWasteScreen")}
            >
              <Image
                source={require("../../assets/images/binbackground.jpeg")}
                style={styles.imageContainer}
              ></Image>
              <Text style={styles.text}> Mixed Waste </Text>
            </TouchableOpacity>
          </Card>

          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.push("HomeCustomer")}
          >
            <Text style={styles.loginText}> Next </Text>
          </TouchableOpacity>

          <View style={styles.bottom}>
            <Text style={styles.bottomtext1}> Already have an account? </Text>

            <TouchableOpacity onPress={() => navigation.push("Login")}>
              <Text style={styles.bottomtext2}> Sign In </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <View style={styles.arrowContainer}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../../assets/images/back_arrow.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  imageContainer: {
    top: 0,
    width: "110%",
    height: "25%",
  },
  midsection: {
    backgroundColor: colors.blue,
    height: "30%",
  },
  card1: {
    height: box_height1,
    width: box_width,
    borderRadius: 15,
    marginRight: 10,
    marginLeft: 20,
    marginTop: 10,
    elevation: 10,
  },
  imageContainer: {
    height: box_height1,
    width: box_width,
    borderRadius: 15,
  },
  imageContainer1: {
    // top: 0,
    width: "110%",
    height: "25%",
  },
  botmage: {
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.blue,
    opacity: 0.8,
    // position: 'absolute'
  },
  topsection: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 40,
  },
  headerText: {
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
    color: colors.white,
    fontSize: 40,
    textAlign: "center",
    top: 0,
  },
  whitesection: {
    flex: 1,
    position: "absolute",
    top: "17%",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    height: "83%",
    borderTopLeftRadius: 95,
    alignItems: "center",
    paddingTop: 40,
    zIndex: 10,
  },
  signuptext: {
    textAlign: "center",
    fontFamily: "Montserrat_400Regular",
    color: colors.black,
    fontSize: 40,
    textAlign: "center",
    marginTop: "15%",
    marginBottom: "10%",
  },
  login: {
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
    marginBottom: 5,
    elevation: 10,
  },
  loginText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.white,
    textAlign: "center",
  },
  arrow: {
    alignSelf: "flex-start",
    top: 55,
    marginLeft: 10,
  },
  arrowContainer: {
    position: "absolute",
    width: 32,
    height: 32,
  },
  bottom: {
    flexDirection: "row",
    // position: 'absolute',
    // bottom: 25,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    // marginTop: 20,
    paddingTop: 20,
  },
  bottomtext1: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.grey,
    textAlign: "center",
  },
  bottomtext2: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.blue,
  },
  inputBox: {
    width: 300,
    height: 75,
    padding: 10,
    // borderColor: colors.blue,
    borderRadius: 16,
    // borderWidth: 1,
    // marginBottom: 20,
    backgroundColor: colors.white,
    margin: 0.05,
  },
  inputHeader: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.black,
    paddingBottom: 5,
  },
  blackText: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.black,
    // underlineColorAndroid: 'transparent'
  },
  inputBoxSurround: {
    width: 310,
    height: 85,
    padding: 10,
    // borderColor: colors.blue,
    borderRadius: 16,
    // borderWidth: 1,
    marginBottom: 25,
    // color: '#FBFAFA',
    backgroundColor: "#FBFAFA",
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
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
});
