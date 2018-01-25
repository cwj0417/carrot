import React, {Component} from 'react'

import {Text, View} from 'react-native'

export default class Main extends Component {

    static navigationOptions = () => {
        return {
            title: '食材'
        }
    }

    render() {
        return (
            <View>
                <Text>食材:</Text>
                <Text onPress={() => this.props.navigation.navigate('Detail', {name: '鸭子'})}>鸭子</Text>
                <Text onPress={() => this.props.navigation.navigate('Detail', {name: '鹦鹉'})}>鹦鹉</Text>
                <Text onPress={() => this.props.navigation.navigate('Detail', {name: '麻雀'})}>麻雀</Text>
            </View>
        )
    }
}