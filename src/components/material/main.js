import React, {Component} from 'react'

import {Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

import {COLOR, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../config'

import {Icon} from 'native-base'

import {filter} from '../../appData'

export default class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filter,
            cur: '',
            curFilter: {}
        }
    }

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
                        <Image style={style.icon} source={require('../../assets/reset.png')}/>
                    </View>
                    <View style={style.headerMiddle}>
                        <View style={{
                            marginBottom: 10,
                            marginTop: 5,
                            marginHorizontal: 15,
                            backgroundColor: '#fff',
                            borderRadius: 5
                        }}>
                            <View style={{height: 31, marginLeft: 5, flexDirection: 'row'}}>
                                <Icon name="ios-search" style={{color: COLOR.backgroundNormal}}/>
                                <TextInput placeholder="Search" style={{marginLeft: 10}}/>
                            </View>
                        </View>
                    </View>
                    <View style={style.headerRight}>
                        <Image style={style.icon} source={require('../../assets/basket.png')}/>
                    </View>
                </View>
            )
        }
    }

    render() {
        return (
            <View style={style.wrap}>
                <View style={style.filter}>
                    <ScrollView horizontal>
                        {this.state.filter.map((filter, index) => (
                            <TouchableOpacity onPress={() => this.setState({cur: filter.name})} key={index}>
                                <View
                                    style={[style.filterItem, this.state.cur === filter.name ? style.filterParentActive : {}]}>
                                    <Text>{filter.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={[{
                    height: 1,
                    width: SCREEN_WIDTH,
                    backgroundColor: '#f2f2f2'
                }, {height: this.state.cur ? 1 : 0}]}/>
                <View style={style.filter}>
                    <ScrollView horizontal>
                        {this.state.filter.filter(({name}) => name === this.state.cur)[0].emun.map((filter, index) => (
                            <View style={[style.filterItem]} key={index}>
                                <Text>{filter.name}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <Text>食材:</Text>
                <Text onPress={() => this.props.navigation.navigate('Detail', {name: '番茄'})}>番茄</Text>
                <Text onPress={() => this.props.navigation.navigate('Detail', {name: '山药'})}>山药</Text>
                <Text onPress={() => this.props.navigation.navigate('Detail', {name: '香蕉'})}>香蕉</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    wrap: {
        backgroundColor: '#dedede',
        height: SCREEN_HEIGHT - 113
    },
    filter: {
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    filterItem: {
        padding: 5,
        margin: 5,
        borderRadius: 5
    },
    filterParentActive: {
        backgroundColor: COLOR.textLightNormal
    },
    icon: {
        width: 24,
        height: 24,
        marginTop: 10
    },
    headerTitle: {
        flexDirection: 'row',
        height: 44
    },
    headerLeft: {
        width: 44,
        alignItems: 'center'
    },
    headerMiddle: {
        width: SCREEN_WIDTH - 88
    },
    headerRight: {
        width: 44,
        alignItems: 'center'
    }
})
