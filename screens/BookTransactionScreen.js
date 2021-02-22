import * as React from 'react';
import {Text, View} from 'react-native';
export default class TransactionScreen extends React.Component{
    render(){
        return(
            <View style={{
                flex:1,
                justifyContent: 'center',
                alignSelf: 'center'
                }}>
                <Text>
                    Issue or Return
                </Text>
            </View>
        )
    }
}