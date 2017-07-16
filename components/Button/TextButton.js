import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  TouchableNativeFeedback,
  TouchableHighlight,
  StyleSheet,
  View,
  Platform,
  Text
} from 'react-native';
import { colors, fontSizes } from '../../config/styles';
import normalize from '../helpers/normalizeText';

const log = () => {
  console.log('please attach method to this component'); //eslint-disable-line no-console
};

const TextButton = (props) => {
    const {        
        buttonStyle,
        disabled,
        disabledStyle,
        light,
        borderRadius,        
        backgroundColor,
        underlayColor,
        textStyle,
        title,
        color,
        fontSize,
        fontFamily,
        fontWeight,
        onPress,
        containerViewStyle,
        ...attributes
    } = props;
    let { Component } = props;
    
    if (!Component && Platform.OS === 'ios') {
        Component = TouchableHighlight;
    }
    if (!Component && Platform.OS === 'android') {
        Component = TouchableNativeFeedback;
    }
    if (!Component) {
        Component = TouchableHighlight;
    }

    if (Platform.OS === 'android' && (borderRadius && !attributes.background)) {
        attributes.background = TouchableNativeFeedback.Ripple(
        'ThemeAttrAndroid',
        true
        );
    }
    
    const _renderContent = () => {
        if(props.children){
            return props.children;
        }
        return <Text style={[
                    light ? styles.titleLight : styles.titleDark, 
                    fontSize && { fontSize },
                    textStyle && textStyle,
                    fontWeight && { fontWeight },
                    fontFamily && { fontFamily },
                ]}>{title}</Text>
    }
    
    return (
        <View
        style={containerViewStyle}
        >
            <Component 
                underlayColor={underlayColor || 'transparent'}
                onPress={onPress || log}
                disabled={disabled || false}
                {...attributes} >
                <View
                    style={[
                        light ? styles.buttonLight : styles.buttonDark, 
                        backgroundColor && { backgroundColor: backgroundColor },
                        borderRadius && { borderRadius },
                        buttonStyle && buttonStyle,
                        disabled && { backgroundColor: colors.disabled },
                        disabled && disabledStyle && disabledStyle,
                    ]}
                >
                    { _renderContent() }
                </View>
            </Component>
        </View>
    );
}

TextButton.propTypes = {
  Component: PropTypes.any,
  buttonStyle: View.propTypes.style,
  disabled: PropTypes.bool,
  disabledStyle: View.propTypes.style,
  light: PropTypes.bool,
  borderRadius: PropTypes.number,
  backgroundColor: PropTypes.string,
  underlayColor: PropTypes.string,
  textStyle: Text.propTypes.style,
  title: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.any,
  fontWeight: PropTypes.string,
  fontFamily: PropTypes.string,
  onPress: PropTypes.any,
};

const styles = StyleSheet.create({
    buttonDark: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    buttonLight: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    titleDark: {
        color: colors.green,
        fontSize: normalize(fontSizes.h5),
        fontWeight: 'bold'
    },
    titleLight: {
        color: colors.white,
        fontSize: normalize(fontSizes.h5),
        fontWeight: 'bold'
    }
});

export default TextButton;
