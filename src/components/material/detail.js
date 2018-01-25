import React, {Component} from 'react'
import {Text, View} from 'react-native'

export default class detail extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.name
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