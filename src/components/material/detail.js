import React, {Component} from 'react'

import {Text, View} from 'react-native'

import {COLOR} from '../../config'

export default class detail extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.name,
            headerStyle: {
                backgroundColor: COLOR.backgroundNormal
            },
            headerTitleStyle: {
                color: COLOR.textLightNormal
            },
            headerBackTitleStyle: {
                color: COLOR.textLightNormal
            }
        }
    }
    render () {
        return (
            <View>
                <Text>食材详情:</Text>
                <Text>{this.props.navigation.state.params.name}很好吃</Text>
            </View>
        )
    }
}