import React, {Component} from 'react'

import {Text} from 'react-native'

import {COLOR} from '../../config'

export default class Main extends Component {

    static navigationOptions = () => {
        return {
            title: '菜谱',
            headerStyle: {
                backgroundColor: COLOR.backgroundNormal
            },
            headerTitleStyle: {
                color: COLOR.textLightNormal
            }
        }
    }

    render() {
        return (
            <Text>菜谱</Text>
        )
    }
}
