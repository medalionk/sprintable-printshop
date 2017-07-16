import React, { Component } from 'react';
 
import {
  StyleSheet,
  View
} from 'react-native';
 
const Container = (props) => {
    return (
        <View style={props.style ? props.style : styles.default}>
            { props.children }
        </View>
    );
}
 
const styles = StyleSheet.create({
    default: {
        marginBottom: 20
    }
});
 
export default Container;