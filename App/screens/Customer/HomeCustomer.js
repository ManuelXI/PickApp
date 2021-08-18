import React, { Fragment, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
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
import { useNavigation } from "@react-navigation/native";

import Recyclable from "./TopNav Screens/Recyclable";
import SolidWaste from "./TopNav Screens/SolidWaste";
import LiquidWaste from "./TopNav Screens/LiquidWaste";
import HarzardousWaste from "./TopNav Screens/HarzardousWaste";

const screen = Dimensions.get("window");

let design_height = 120;
let design_curve = 70;
let box_width = screen.width / 2 - 30;
// let separator_top = StatusBar.currentHeight + 200;

const data = [
  {
    name: "My Bins",
    icon: require("../../assets/images/MyBinsIcon.png"),
  },
  {
    name: "Recyclables",
    icon: require("../../assets/images/RecyclableIcon.png"),
  },
  {
    name: "Solid Waste",
    icon: require("../../assets/images/SolidWasteIcon.png"),
  },
  {
    name: "Liquid Waste",
    icon: require("../../assets/images/LiquidWasteIcon.png"),
  },
  {
    name: "Hazards",
    icon: require("../../assets/images/HazardWasteIcon.png"),
  },
];
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useFonts } from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import { ScrollView } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default ({ navigation }) => {
  const [cat, setCat] = useState(1);
  const [status, setStatus] = useState("Recyclables");
  let [fontsLoaded, error] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  // const navigation2 = useNavigation();

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

      <View>
        <ScrollView
          style={{
            flexDirection: "row",
            marginTop: 15,
            // backgroundColor: "red",
            paddingBottom: 15,
          }}
          showsHorizontalScrollIndicator={false}
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
                    color: status === item.name ? colors.black : colors.grey,
                    fontFamily: "Montserrat_400Regular",
                    fontSize: status === item.name ? 15 : 12,
                    textAlign: "center",
                    marginTop: -3,
                  }}
                >
                  {" "}
                  {item.name}{" "}
                </Text>
              </View>
            </Fragment>
          ))}
        </ScrollView>
      </View>

      {status === "Recyclables" && (
        <Fragment>
          {/* <Recyclable navigation2={this.props.navigation} /> */}
          <Recyclable />
        </Fragment>
      )}
      {status === "Solid Waste" && (
        <Fragment>
          <SolidWaste />
        </Fragment>
      )}
      {status === "Liquid Waste" && (
        <Fragment>
          <LiquidWaste />
        </Fragment>
      )}
      {status === "Hazards" && (
        <Fragment>
          <HarzardousWaste />
        </Fragment>
      )}

      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          justifyContent: "space-between",
        }}
      >
        <View style={styles.separator1} />
        <View style={styles.separator2} />
      </View>

      {/* <View style={styles.bottomDesign}>
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

      </View> */}

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
    marginTop: Constants.statusBarHeight + 10,
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
    zIndex: -10,
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
  separator1: {
    backgroundColor: colors.grey,
    height: StyleSheet.hairlineWidth,
    // height: 20,
    marginLeft: 20,
    marginRight: 10,
    top: Constants.statusBarHeight + 165,
    width: box_width,
  },
  separator2: {
    backgroundColor: colors.grey,
    height: StyleSheet.hairlineWidth,
    marginRight: 20,
    marginLeft: 10,
    top: Constants.statusBarHeight + 165,
    // top: screen.height / 2,
    width: box_width,
  },
});
