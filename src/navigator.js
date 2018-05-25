import React, {Component} from 'react'

import {TabNavigator} from 'react-navigation'

import Material from './components/material/index'

import Recipe from './components/recipe/index'

import Info from './components/info/index'

import {Text, Image, View} from 'react-native'

const Tab = TabNavigator({
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
                <Image source={require('./assets/menu.png')} style={{width: 26, height: 26}} />
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
            <Info></Info>
        ),
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: () => (
                <Image source={require('./assets/carrot.png')} style={{width: 26, height: 26}} />
            )
        }
    }
})

export default Tab