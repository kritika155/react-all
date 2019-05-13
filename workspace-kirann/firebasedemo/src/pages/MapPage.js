import React, {Component} from 'react';
import {View } from 'react-native';
import MapComponent from '../components/MapComponent';
export default class MapPage extends Component{
    render(){
        return(
            <View>
                < MapComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}