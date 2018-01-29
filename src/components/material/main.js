import React, {Component} from 'react'

import {Text, View, Image, StyleSheet} from 'react-native'

import {COLOR} from '../../config'

import {SearchBar} from 'antd-mobile'

export default class Main extends Component {

    static navigationOptions = () => {
        return {
            title: '食材',
            headerStyle: {
                backgroundColor: COLOR.backgroundNormal
            },
            headerTitleStyle: {
                color: COLOR.textLightNormal
            },
            headerTitle: (
                <View style={style.headerTitle}>
                    <View style={style.headerLeft}>
                        <Image style={style.icon} source={require('../../assets/reset.png')} />
                    </View>
                    <View style={style.headerMiddle}>
                        <SearchBar placeholder="Search" maxLength={8} />
                    </View>
                    <View style={style.headerRight}>
                        <Image style={style.icon} source={require('../../assets/plus.png')} />
                    </View>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={style.wrap}>
                <Text>食材:</Text>
                <Text onPress={() => this.props.navigation.navigate('Detail', {name: '鸭子'})}>鸭子</Text>
                <Text onPress={() => this.props.navigation.navigate('Detail', {name: '鹦鹉'})}>鹦鹉</Text>
                <Text onPress={() => this.props.navigation.navigate('Detail', {name: '麻雀'})}>麻雀</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    wrap: {
        backgroundColor: '#fff',
        height: 300
    },
    icon: {
        width: 24,
        height: 24,
        marginTop: 10
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerLeft: {
        flex: 1,
        alignItems: 'center'
    },
    headerMiddle: {
        flex: 4
    },
    headerRight: {
        flex: 1,
        alignItems: 'center'
    }
})
