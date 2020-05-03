import React, {useState, useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text , Input, Button} from 'react-native-elements';
import Spacer from './Spacer';

const AurhForm = ({ headerText, errorMessage, onSubmit, submitButtonText}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
        <Text h3> {headerText} </Text>
        <Input 
            label = "Email"
            value = {email}
            onChangeText = {setEmail}
            autoCapitalize = "none"
            autoCorrect = {false}
          />
        
        <Input 
            secureTextEntry
            label = "Password"
            value = {password}
            onChangeText = {setPassword}
            autoCapitalize = "none"
            autoCorrect = {false}

         />
        {errorMessage ? <Text style = {styles.errorMessage}> {errorMessage} </Text> : null}
        <Button title = {submitButtonText} onPress={() => onSubmit({email, password})
            } />
            </View>
    );

};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
        marginLeft: 15,
        marginTop: 15,
    },
});

export default AurhForm;
