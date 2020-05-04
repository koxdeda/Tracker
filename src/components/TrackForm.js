import React, {useContext} from 'react';
import {Input, Button} from 'react-native-elements';
import {Context as LocationContext} from '../context/LocationContext';
import Spacer from '../components/Spacer';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackForm = () => {
const {state: {name, recording, locations}, 
    startRecording, stopRecording, changeName} = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    

    return(
     <>
    <Input  
    placeholder = "Input name"
    value = {name}
     onChangeText = {changeName}/>
    {recording 
    ?    <Button title = "Stop" onPress = {stopRecording}/> 
    :    <Button  title = "Start recording" onPress = {startRecording} />
    }

    {  !recording && locations.length ?  
        <Button title = "Save recording" onPress = {saveTrack}/> 
          : null 
    }



    </>
    );
};


export default TrackForm;