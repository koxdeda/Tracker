import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (
    <SafeAreaView forceInset = {{top: 'always'}}>
    <Text style = {{fontSize: 48}}> Account Screen</Text>
    <Button style = {{nargeinTop: 15}} title="Sign Out" onPress = {signout}/>
    </SafeAreaView>
    );
};

AccountScreen.navigationOptions ={
    title: 'Account',
    tabBarIcon: <MaterialCommunityIcons 
    name="account-check" size = {24} />
}

const styles = StyleSheet.create({
    
});

export default AccountScreen;