import React,{Component} from 'react';
import {View} from 'react-native';
import GeolocationExample from '../components/GeolocationExample';
export default class GeolocationPage extends Component{
    render(){
        return(
            <View>
                <GeolocationExample navigation={this.props.navigation}/>
            </View>
        )
    }
}