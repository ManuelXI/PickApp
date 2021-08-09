import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import { Icon, InlineIcon } from '@iconify/react';
import arrowDown from '@iconify/icons-bi/arrow-down';


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
    Montserrat_900Black_Italic 
} from '@expo-google-fonts/montserrat'
import { useFonts } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

const screen = Dimensions.get('window');

let design_height = 120;
let design_curve = 70;
export default ({navigation}) => {
    
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
        Montserrat_900Black_Italic 
        
    });

    if (!fontsLoaded) {
        return <AppLoading />
    }


  return (
      <View style={styles.container}>

          <StatusBar barStyle='light-content' />

          {/* <View style={styles.bottomDesign}>
              <Image source={require('../../assets/images/pattern.png')} style={styles.bottomUnder} />
              <View style={styles.bottomTop} >
              </View>
              <View style={styles.middleUnder} >
              </View>
              <Image source={require('../../assets/images/pattern.png')} style={styles.middleTop} />
              <Image source={require('../../assets/images/pattern.png')} style={styles.topUnder} />
              <View style={styles.topTop} >
              </View>
              <View style={styles.design} >
              </View>
          </View> */}

          {/* <View style={styles.trial}> */}

          {/* </View> */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}} >
            <View style={styles.separator1} />
            <View style={styles.separator2} />

          </View>

        






    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        // marginTop: 60,
        backgroundColor: colors.white
        // backgroundColor: 'red'

    },
    separator1: {
        backgroundColor: '#D1D0D0',
        height: StyleSheet.hairlineWidth,
        marginLeft: 20,
        top: screen.height / 2,
        width: 153
    },
    separator2: {
        backgroundColor: '#D1D0D0',
        height: StyleSheet.hairlineWidth,
        marginRight: 20,
        top: screen.height / 2,
        width: 153
    },
    bottomDesign: {
        flex: 1,
        // backgroundColor: colors.white,
        justifyContent: 'flex-end'
    },
    bottomUnder: {
        width: '100%',
        height: design_height,
        // top: screen.height - 120,
        // top: screen.height - 60,
        position: 'absolute',
        bottom: 0,
        
    },
    bottomTop: {
        width: '100%',
        height: design_height,
        // bottom: 0,
        position: 'absolute',
        // top: screen.height - design_height,
        backgroundColor: colors.blue,
        borderTopLeftRadius: design_curve,
        bottom: 0,
    },
    middleUnder: {
        width: '100%',
        height: design_height,
        // bottom: 0,
        position: 'absolute',
        // top: screen.height - (design_height * 2),
        backgroundColor: colors.blue,
        borderTopLeftRadius: design_curve,
        bottom: design_height
    },
    middleTop: {
        width: '100%',
        height: design_height,
        // bottom: 0,
        position: 'absolute',
        // top: screen.height - (design_height * 2),
        backgroundColor: colors.blue,
        borderBottomRightRadius: design_curve,
        bottom: design_height
    },
    topUnder: {
        width: '100%',
        height: design_height,
        // bottom: 0,
        position: 'absolute',
        // top: screen.height - (design_height * 3),
        backgroundColor: colors.blue,
        bottom: design_height * 2
        
    },
    topTop: {
        width: '100%',
        height: design_height,
        // bottom: 0,
        position: 'absolute',
        // top: screen.height - (design_height * 3),
        backgroundColor: colors.white,
        // backgroundColor: 'red',
        borderBottomRightRadius: design_curve,
        bottom: design_height * 2
    },
    design: {
        top: screen.height - 150,
        position: 'absolute',
        height: design_height,
        backgroundColor: 'green',
        height: 150,
        width: '100%'
    },
    trial: {
        height: screen.height,
        width: 50,
        backgroundColor: colors.blue,
        bottom: -50
    }

 
});
