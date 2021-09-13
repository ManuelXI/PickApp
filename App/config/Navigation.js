import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Aftersplash from "../screens/Aftersplash";
import Choice from "../screens/Choice";
import Login from "../screens/Login";
import SignInCustomer from "../screens/SignInCustomer";
import SignUpCustomer from "../screens/SignUpCustomer";
import HomeCustomer from "../screens/Customer/HomeCustomer";
import DesignStuff from "../screens/Customer/DesignStuff";
import Recyclable from "../screens/Customer/TopNav Screens/Recyclable";
import SolidWaste from "../screens/Customer/TopNav Screens/SolidWaste";
import LiquidWaste from "../screens/Customer/TopNav Screens/LiquidWaste";
import HarzardousWaste from "../screens/Customer/TopNav Screens/HarzardousWaste";
import BinLevel from "../screens/Customer/TopNav Screens/BinLevel";

import PaperScreen from "../screens/Customer/WasteTypes/PaperScreen";
import MetalScreen from "../screens/Customer/WasteTypes/MetalScreen";
import WoodScreen from "../screens/Customer/WasteTypes/WoodScreen";
import GlassScreen from "../screens/Customer/WasteTypes/GlassScreen";
import PlasticBottlesScreen from "../screens/Customer/WasteTypes/PlasticBottlesScreen";
import CandTScreen from "../screens/Customer/WasteTypes/CandTScreen";
import CeramicsScreen from "../screens/Customer/WasteTypes/CeramicsScreen";
import PlasticSachetsScreen from "../screens/Customer/WasteTypes/PlasticSachetsScreen";
import MixedWasteScreen from "../screens/Customer/WasteTypes/MixedWasteScreen";
import GreenWasteScreen from "../screens/Customer/WasteTypes/GreenWasteScreen";
import ElectricalDevicesScreen from "../screens/Customer/WasteTypes/ElectricalDevicesScreen";
import CandDDebrisScreen from "../screens/Customer/WasteTypes/CandDDebrisScreen";
import SewageScreen from "../screens/Customer/WasteTypes/SewageScreen";

import ArrivingScreen from "../screens/Customer/ArrivingScreen";
import FeedBackScreen from "../screens/Customer/FeedBackScreen";
import SelectQuantity from "../screens/Customer/SelectQuantity";
import SearchScreen from "../screens/Customer/SearchScreen";
import AcceptPickup from "../screens/Customer/AcceptPickup";
import SelectTimeSlot from "../screens/Customer/Scheduling/SelectTimeSlot";
import ConfirmBooking from "../screens/Customer/Scheduling/ConfirmBooking";
import MyBookings from "../screens/Customer/DrawerScreens/MyBookings";

import EditAccount from "../screens/Customer/DrawerScreens/EditAccount";
import PickupHistory from "../screens/Customer/DrawerScreens/PickupHistory";
import Wallet from "../screens/Customer/DrawerScreens/Wallet";

const MainStack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const MainStackScreen = () => (
  <MainStack.Navigator
    headerMode="none"
    // initialRouteName="HomeCustomer"
    // initialRouteName="DesignStuff"
    // initialRouteName="PlasticSachetsScreen"
    initialRouteName="HomeCustomer"
    // initialRouteName="BinLevel"
    // initialRouteName="LiquidWaste"
    // initialRouteName="PickupHistory"
    // initialRouteName="DesignStuff"
    // initialRouteName="ElectricalDevicesScreen"
    // initialRouteName="FeedBackScreen"
    // initialRouteNames="SelectTimeSlot"
    // initialRouteName="SearchScreen"
    // initialRouteName="AcceptPickup"
    // initialRouteName="Recyclable"
  >
    <MainStack.Screen
      name="Aftersplash"
      component={Aftersplash}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Choice" component={Choice} />
    <MainStack.Screen name="Login" component={Login} />
    <MainStack.Screen name="SignInCustomer" component={SignInCustomer} />
    <MainStack.Screen name="HomeCustomer" component={HomeCustomer} />
    <MainStack.Screen name="SignUpCustomer" component={SignUpCustomer} />
    <MainStack.Screen name="DesignStuff" component={DesignStuff} />
    <MainStack.Screen name="Recyclable" component={Recyclable} />
    <MainStack.Screen name="SolidWaste" component={SolidWaste} />
    <MainStack.Screen name="LiquidWaste" component={LiquidWaste} />
    <MainStack.Screen name="HarzardousWaste" component={HarzardousWaste} />
    <MainStack.Screen name="BinLevel" component={BinLevel} />

    <MainStack.Screen name="PaperScreen" component={PaperScreen} />
    <MainStack.Screen name="MetalScreen" component={MetalScreen} />
    <MainStack.Screen name="WoodScreen" component={WoodScreen} />
    <MainStack.Screen name="GlassScreen" component={GlassScreen} />
    <MainStack.Screen
      name="PlasticBottlesScreen"
      component={PlasticBottlesScreen}
    />
    <MainStack.Screen name="CeramicsScreen" component={CeramicsScreen} />
    <MainStack.Screen
      name="PlasticSachetsScreen"
      component={PlasticSachetsScreen}
    />
    <MainStack.Screen name="CandTScreen" component={CandTScreen} />
    <MainStack.Screen name="MixedWasteScreen" component={MixedWasteScreen} />
    <MainStack.Screen name="CandDDebrisScreen" component={CandDDebrisScreen} />
    <MainStack.Screen
      name="ElectricalDevicesScreen"
      component={ElectricalDevicesScreen}
    />
    <MainStack.Screen name="GreenWasteScreen" component={GreenWasteScreen} />
    <MainStack.Screen name="SewageScreen" component={SewageScreen} />

    <MainStack.Screen name="SelectQuantity" component={SelectQuantity} />
    <MainStack.Screen name="SearchScreen" component={SearchScreen} />
    <MainStack.Screen name="AcceptPickup" component={AcceptPickup} />
    <MainStack.Screen name="SelectTimeSlot" component={SelectTimeSlot} />
    <MainStack.Screen name="ConfirmBooking" component={ConfirmBooking} />
    <MainStack.Screen name="MyBookings" component={MyBookings} />
    <MainStack.Screen name="ArrivingScreen" component={ArrivingScreen} />
    <MainStack.Screen name="FeedBackScreen" component={FeedBackScreen} />

    <MainStack.Screen name="EditAccount" component={EditAccount} />
    <MainStack.Screen name="PickupHistory" component={PickupHistory} />
    <MainStack.Screen name="Wallet" component={Wallet} />
  </MainStack.Navigator>
);

// const Drawer = createDrawerNavigator();

// export default () => {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="HomeCustomer">
//         <Drawer.Screen name="HomeCustomer" component={HomeCustomer} />
//         <Drawer.Screen name="EditAccount" component={EditAccount} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// };

export default () => (
  <NavigationContainer>
    {/* <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainStackScreen} />
      <Drawer.Screen name="Home" component={Wallet} />
    </Drawer.Navigator> */}

    <MainStackScreen />
  </NavigationContainer>
);

// export default function Ssss() {
//   return (
//     <NavigationContainer>
//       {/* <MainStackScreen /> */}
//       {/* <DrawerScreen /> */}
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Recyclable" component={Recyclable} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// ex
