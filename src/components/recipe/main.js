import React, {Component} from 'react'

import {Text} from 'react-native'

export default class Main extends Component {

    static navigationOptions = () => {
        return {
            title: '菜谱'
        }
    }

    render() {
        return (
            <Text>菜谱</Text>
        )
    }
}
