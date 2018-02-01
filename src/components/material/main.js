import React, {Component} from 'react'

import {Image, StyleSheet, Text, TextInput, View} from 'react-native'

import {COLOR, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../config'

import {Icon} from 'native-base'

export default class Main extends Component {

    constructor (props) {
        super(props)

        this.state = {
            filter: [{
                name: '属性',
                emun: [{
                    name: '热性'
                }, {
                    name: '温性'
                }]
            }, {
                name: '酸碱',
                emun: [{
                    name: '酸'
                }, {
                    name: '碱'
                }]
            }, {
                name: '消化',
                emun: [{
                    name: '好'
                }, {
                    name: '差'
                }]
            }, {
                name: '',
                emun: []
            }],
            cur: ''
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
                        <View style={{marginBottom: 10, marginTop: 5, marginHorizontal: 15, backgroundColor: '#fff'}}>
                            <View style={{height: 31, marginLeft: 10, flexDirection: 'row'}}>
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
                    {this.state.filter.map((filter, index) => (
                        <Text onPress={() => this.setState({cur: filter.name})} style={style.filterItem} key={index}>{filter.name}</Text>
                    ))}
                </View>
                <View style={style.filter}>
                    {this.state.filter.filter(({name}) => name === this.state.cur)[0].emun.map((filter, index) => (
                        <Text style={style.filterItem} key={index}>{filter.name}</Text>
                    ))}
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
        margin: 5
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
