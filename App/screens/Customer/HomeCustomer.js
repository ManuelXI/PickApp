import React, { Fragment, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../../constants/colors";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Icon, InlineIcon } from "@iconify/react";
import arrowDown from "@iconify/icons-bi/arrow-down";

let design_height = 120;
let design_curve = 70;

const data = [
  {
    name: "Recyclables",
    icon: require("../../assets/images/RecyclableIcon.png"),
  },
  {
    name: "Solid Waste",
    icon: require("../../assets/images/SolidWasteIcon.png"),
  },
];
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
import { ScrollView } from "react-native-gesture-handler";

const screen = Dimensions.get("window");

export default ({ navigation }) => {
  const [cat, setCat] = useState(1);
  const [status, setStatus] = useState("Recyclables");
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

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}> Hello, Zhuri... </Text>
        <TouchableOpacity>
          <Image
            source={require("../../assets/images/list.png")}
            style={styles.optionsIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flexDirection: "row", padding: 20 }}
        horizontal={true}
      >
        {/*  */}
        {data?.map((item, itemIdx) => (
          <Fragment key={itemIdx}>
            <View style={{ paddingRight: 10 }}>
              <TouchableOpacity onPress={() => setStatus(item.name)}>
                <Image
                  source={item.icon}
                  style={{
                    height: status === item.name ? 75 : 55,
                    width: status === item.name ? 95 : 75,
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  color: colors.grey,
                  fontFamily: "Montserrat_400Regular",
                  fontSize: status === item.name ? 15 : 12,
                  textAlign: "center",
                }}
              >
                {" "}
                {item.name}{" "}
              </Text>
            </View>
          </Fragment>
        ))}
      </ScrollView>

      {/* <View style={{
              flexDirection: 'row',
              position: 'absolute',
              justifyContent: 'space-between',
          }} >
            <View style={styles.separator1} />
            <View style={styles.separator2} />

          </View> */}

      <View style={styles.bottomDesign}>
        <Image
          source={require("../../assets/images/pattern.png")}
          style={styles.bottomUnder}
        />
        <View style={styles.bottomTop}></View>
        <View style={styles.middleUnder}></View>
        <Image
          source={require("../../assets/images/pattern.png")}
          style={styles.middleTop}
        />
        <Image
          source={require("../../assets/images/pattern.png")}
          style={styles.topUnder}
        />
        <View style={styles.topTop}></View>
        {/* <View style={styles.design} >
              </View> */}
      </View>

      {/* {cat === 1 && (
            <Fragment>
            <View style={{
            // flexDirection:"column",
                backgroundColor: 'red',
                position: 'absolute',
                top: 250
            }}>
                <ScrollView>
                    
                    <Text style={{paddingTop: 50}}>
                    Recyclables
                    </Text>
                </ScrollView>
            </View>
            </Fragment>
            )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: colors.white,
  },
  headerContainer: {
    // position: 'absolute',
    marginTop: 60,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 20,
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "Montserrat_400Regular",
    color: colors.black,
    fontSize: 28,
  },
  optionsIcon: {
    height: 25,
    width: 25,
  },
  bottomDesign: {
    flex: 1,
    backgroundColor: colors.red,
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
    borderTopLeftRadius: design_curve,
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
  //   categoryText: {
  //     color: colors.grey,
  //     fontFamily: "Montserrat_400Regular",
  //     fontSize: 15,
  //     textAlign: "center",
  //   },
  //   categoryIcon: {
  //     height: 75,
  //     width: 95,
  //   },
  separator1: {
    backgroundColor: "#D1D0D0",
    height: StyleSheet.hairlineWidth,
    // height: 20,
    marginLeft: 20,
    top: 300,
    width: 153,
  },
  separator2: {
    backgroundColor: "#D1D0D0",
    height: StyleSheet.hairlineWidth,
    marginRight: 20,
    top: 300,
    // top: screen.height / 2,
    width: 153,
  },
});
