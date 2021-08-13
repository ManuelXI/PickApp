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
import colors from "../constants/colors";
import { Icon, InlineIcon } from "@iconify/react";
import arrowDown from "@iconify/icons-bi/arrow-down";

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

const screen = Dimensions.get("window");

export default ({ navigation }) => {
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

  // const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require("../assets/images/pattern.png")}
        style={styles.imageContainer}
      ></Image>
      <View style={styles.midsection}></View>

      <View style={styles.overlay} />

      <View style={styles.topsection}>
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      <View style={styles.whitesection}>
        <View style={styles.inputBoxSurround}>
          <View style={styles.inputBox}>
            <Text style={styles.inputHeader}> First Name </Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              //   onChangeText={email => setEmail(email)}
            />
          </View>
        </View>

        <View style={styles.inputBoxSurround}>
          <View style={styles.inputBox}>
            <Text style={styles.inputHeader}> Last Name </Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              // onChangeText={email => setEmail(email)}
            />
          </View>
        </View>

        <View style={styles.inputBoxSurround}>
          <View style={styles.inputBox}>
            <Text style={styles.inputHeader}> Email </Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              //   onChangeText={email => setEmail(email)}
            />
          </View>
        </View>

        <View style={styles.inputBoxSurround}>
          <View style={styles.inputBox}>
            <Text style={styles.inputHeader}> Password </Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              //   onChangeText={email => setEmail(email)}
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.inputBoxSurround}>
          <View style={styles.inputBox}>
            <Text style={styles.inputHeader}> Confirm Password </Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              //   onChangeText={email => setEmail(email)}
              secureTextEntry={true}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.push("HomeCustomer")}
        >
          <Text style={styles.loginText}> Login </Text>
        </TouchableOpacity>

        <View style={styles.bottom}>
          <Text style={styles.bottomtext1}> Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.push("Login")}>
            <Text style={styles.bottomtext2}> Sign In </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.arrowContainer}>
        <TouchableOpacity
          style={styles.arrow}
          onPress={() => navigation.goBack()}
        >
          <Image source={require("../assets/images/back_arrow.png")} />
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
    borderWidth: 1,
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
    marginTop: 10,
  },
  bottomtext1: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.grey,
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
  input: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 15,
    color: colors.grey,
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
});
