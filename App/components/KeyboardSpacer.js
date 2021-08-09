import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Keyboard, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        left: 0,
        right: 0,
        bottom: 0
    }

});


export const KeyboardSpacer = ({ onToggle }) => {
    const [keyboardSpace, setKeyboardSpace] = useState(0);
    useEffect(() => {
        const showListener = Keyboard.addListener('keyboardDidShow', event => {
            console.log(event);
            const screenHeight = Dimensions.get('window').height;
            const endY = event.endCoordinates.screenY;

            setKeyboardSpace(screenHeight - endY - 170);
            onToggle(true);
            
        });
        const hideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardSpace(0);
            onToggle(false);
            
        });
        return () => {
            showListener.remove();
            hideListener.remove();
        }


    }, []);
    
    // useEffect(() => {
    //     const updateKeyboardSpace = (event) => {
    //       if (!event.endCoordinates) {
    //         return;
    //       }
    
    //       const screenHeight = Dimensions.get('window').height;
    //       const newKeyboardSpace = screenHeight - event.endCoordinates.screenY;
    //       setKeyboardSpace(newKeyboardSpace);
    //       onToggle(true, newKeyboardSpace);
    //     };
    //     const showEvt =
    //       Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow';
    //     const showListener = Keyboard.addListener(showEvt, updateKeyboardSpace);
    
    //     const resetKeyboardSpace = () => {
    //       setKeyboardSpace(0);
    //       onToggle(false, 0);
    //     };
    //     const hideEvt =
    //       Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide';
    //     const hideListener = Keyboard.addListener(hideEvt, resetKeyboardSpace);
    
    //     return () => {
    //       showListener.remove();
    //       hideListener.remove();
    //     };
    //   }, []);
    
    return <View style={styles.container, { height: keyboardSpace }} />
};