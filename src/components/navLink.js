import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {withNavigation} from 'react-navigation';

const NavLink = ( {navigation, text, routeName}) => {

    return (
    <TouchableOpacity
         onPress = {() => navigation.navigate(routeName)}> 
            <Text style = {styles.link}>
                 {text}
                 </Text>
    </TouchableOpacity>  
    );
};



const styles = StyleSheet.create({
    link: {
        color: 'blue',
        marginTop: 15,
    },

});

export default withNavigation(NavLink);