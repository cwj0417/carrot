import React, {Component} from 'react'

import {Text} from 'react-native'

import {COLOR} from '../../config'

import TouchID from 'react-native-touch-id'

export default class Info extends Component {

    static navigationOptions = () => {
        return {
            title: '我的',
            headerStyle: {
                backgroundColor: COLOR.backgroundNormal
            },
            headerTitleStyle: {
                color: COLOR.textLightNormal
            }
        }
    }

    componentDidMount () {
        // TouchID.authenticate('verify your identity please')
        //     .then(success => {
        //         console.warn('suc', success)
        //     })
        //     .catch(error => {
        //         console.warn('err', error)
        //     })
    }

    render() {
        return (
            <Text>我的</Text>
        )
    }
}
