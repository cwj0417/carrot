import React, {Component} from 'react'

import {TabNavigator} from 'react-navigation'

import Material from './components/material/index'

import Recipe from './components/recipe/index'

import {Text, Image} from 'react-native'

export default TabNavigator({
    Material: {
        screen: Material,
        navigationOptions: {
            tabBarLabel: '食材',
            tabBarIcon: () => (
                <Image source={require('./assets/carrot.png')} style={{width: 26, height: 26}} />
            )
        }
    },
    Recipe: {
        screen: Recipe,
        navigationOptions: {
            tabBarLabel: '菜谱',
            tabBarIcon: () => (
                <Image source={require('./assets/carrot.png')} style={{width: 26, height: 26}} />
            )
        }
    },
    Data: {
        screen: () => (
            <Text>数据库</Text>
        ),
        navigationOptions: {
            tabBarLabel: '数据库',
            tabBarIcon: () => (
                <Image source={require('./assets/carrot.png')} style={{width: 26, height: 26}} />
            )
        }
    },
    Info: {
        screen: () => (
            <Text>我的</Text>
        ),
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: () => (
                <Image source={require('./assets/carrot.png')} style={{width: 26, height: 26}} />
            )
        }
    }
})