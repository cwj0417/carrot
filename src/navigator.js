import React, {Component} from 'react'

import {TabNavigator} from 'react-navigation'

import Material from './components/material/index'

import Recipe from './components/recipe/index'

import {Text} from 'react-native'

export default TabNavigator({
    Material: {
        screen: Material
    },
    Recipe: {
        screen: Recipe
    },
    Data: {
        screen: () => (
            <Text>数据库</Text>
        )
    },
    Info: {
        screen: () => (
            <Text>我的</Text>
        )
    }
})