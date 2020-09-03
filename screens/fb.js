import React from 'react';
import{Text,View} from 'react-native';
import {Header} from 'react-native-elements';

export default class FacebookScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1, justifyContent:"top"}}>
                    <Header
          backgroundColor={'orange'}
          centerComponent={{
            text: 'Buzz App',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

                
                <Text style={{marginLeft:650, marginTop:250, fontWeight:"bold", fontSize:25}}>Facebook</Text>
                
                
            </View>
        );
    };
}
