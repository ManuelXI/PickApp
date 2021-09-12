import React, { useRef, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import colors from "../../constants/colors";
import { Icon, InlineIcon } from "@iconify/react";
import arrowDown from "@iconify/icons-bi/arrow-down";

import home from "../../assets/images/home.png";
import search from "../../assets/images/search.png";
import logout from "../../assets/images/logout.png";

import hamb from "../../assets/images/list.png";
import close from "../../assets/images/close.png";

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

let design_height = 120;
let design_curve = 70;
export default ({ navigation }) => {
  const [currentTab, setCurrentTab] = useState("Home");

  //To get Current Status of Menu
  const [showMenu, setShowMenu] = useState(false);
  // Animated Properties

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View
        style={{
          justifyContent: "flex-start",
          padding: 15,
          alignItems: "flex-end",
        }}
      >
        <Image
          source={require("../../assets/images/editAccountPic.jpg")}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}
        ></Image>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginTop: 20,
          }}
        >
          Alice Kwesna
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "white",
            }}
          >
            View Profile
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            //Tab Buttons
          }
          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Search", search)}
        </View>

        <View>{TabButton(currentTab, setCurrentTab, "LogOut", logout)}</View>
      </View>

      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          //Transforming
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {
          //Menu Button
        }

        <Animated.View
          style={{
            transform: [
              {
                translateY: closeButtonOffset,
              },
            ],
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.9,
                duration: 300,
                useNativeDriver: true,
              }).start();
              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : -230,
                duration: 300,
                useNativeDriver: true,
              }).start();
              Animated.timing(closeButtonOffset, {
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            <Image
              source={showMenu ? close : hamb}
              style={{
                width: 20,
                height: 20,
                tintColor: "black",
                marginTop: 40,
                alignSelf: "flex-end",
              }}
            ></Image>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "black",
              paddingTop: 20,
            }}
          >
            {currentTab}{" "}
          </Text>

          <Image
            source={require("../../assets/images/editAccountPic.jpg")}
            style={{
              width: "100%",
              height: 400,
              borderRadius: 15,
              marginTop: 20,
            }}
          ></Image>

          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              paddingTop: 15,
              paddingBottom: 5,
            }}
          >
            Alice Kwesna
          </Text>

          <Text style={{}}>YouTube, Twitter, Insta</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};

//Multiple Buttons
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
        } else {
          setCurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 25,
          paddingRight: 15,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            tintColor: currentTab == title ? colors.blue : colors.white,
          }}
        ></Image>

        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? colors.blue : colors.white,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    // marginTop: 60,
    backgroundColor: colors.blue,
    // backgroundColor: 'red'
  },
  separator1: {
    backgroundColor: "#D1D0D0",
    height: StyleSheet.hairlineWidth,
    marginLeft: 20,
    top: screen.height / 2,
    width: 153,
  },
  separator2: {
    backgroundColor: "#D1D0D0",
    height: StyleSheet.hairlineWidth,
    marginRight: 20,
    top: screen.height / 2,
    width: 153,
  },
  bottomDesign: {
    flex: 1,
    // backgroundColor: colors.white,
    justifyContent: "flex-end",
  },
  bottomUnder: {
    width: "100%",
    height: design_height,
    // top: screen.height - 120,
    // top: screen.height - 60,
    position: "absolute",
    bottom: 0,
  },
  bottomTop: {
    width: "100%",
    height: design_height,
    // bottom: 0,
    position: "absolute",
    // top: screen.height - design_height,
    backgroundColor: colors.blue,
    borderTopLeftRadius: design_curve,
    bottom: 0,
  },
  middleUnder: {
    width: "100%",
    height: design_height,
    // bottom: 0,
    position: "absolute",
    // top: screen.height - (design_height * 2),
    backgroundColor: colors.blue,
    borderTopLeftRadius: design_curve,
    bottom: design_height,
  },
  middleTop: {
    width: "100%",
    height: design_height,
    // bottom: 0,
    position: "absolute",
    // top: screen.height - (design_height * 2),
    backgroundColor: colors.blue,
    borderBottomRightRadius: design_curve,
    bottom: design_height,
  },
  topUnder: {
    width: "100%",
    height: design_height,
    // bottom: 0,
    position: "absolute",
    // top: screen.height - (design_height * 3),
    backgroundColor: colors.blue,
    bottom: design_height * 2,
  },
  topTop: {
    width: "100%",
    height: design_height,
    // bottom: 0,
    position: "absolute",
    // top: screen.height - (design_height * 3),
    backgroundColor: colors.white,
    // backgroundColor: 'red',
    borderBottomRightRadius: design_curve,
    bottom: design_height * 2,
  },
  design: {
    top: screen.height - 150,
    position: "absolute",
    height: design_height,
    backgroundColor: "green",
    height: 150,
    width: "100%",
  },
  trial: {
    height: screen.height,
    width: 50,
    backgroundColor: colors.blue,
    bottom: -50,
  },
});
