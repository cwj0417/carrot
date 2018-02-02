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
                            <View style={{height: 31, marginLeft: 10, flexDirection: 'row'}}>
                                <Icon name="ios-search" style={{color: COLOR.backgroundNormal, fontSize: 20, lineHeight: 31}}/>
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
        const toggleFilter = filter => {
            let current = this.state.curFilter[this.state.cur.value] || []
            let res = []
            for (let item of this.state.cur.enum) {
                let curHas = current.find(({name}) => name === item.name)
                let targetHas = filter.name === item.name
                if (curHas || targetHas) {
                    if (!(curHas && targetHas)) {
                        res.push(item)
                    }
                }
            }
            this.setState({curFilter: {...this.state.curFilter, [this.state.cur.value]: res}})
        }
        return (
            <View style={style.wrap}>
                <View style={style.filter}>
                    <ScrollView horizontal>
                        {this.state.filter.map((filter, index) => (
                            <TouchableOpacity onPress={() => this.setState({cur: filter})} key={index}>
                                <View
                                    style={[style.filterItem, this.state.cur.value === filter.value ? style.filterParentActive : {}]}>
                                    <Text style={[style.filterItemText, this.state.cur.value === filter.value ? style.filterParentActiveText : {}]}>{filter.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={style.filter}>
                    <ScrollView horizontal>
                        {this.state.filter.filter(({value}) => value === this.state.cur.value)[0].enum.map((filter, index) => (
                            <TouchableOpacity onPress={() => toggleFilter(filter)} key={index}>
                                <View style={[style.filterItem, {paddingHorizontal: 0, marginHorizontal: 17}, this.state.cur && this.state.curFilter[this.state.cur.value] && this.state.curFilter[this.state.cur.value].find(({name}) => name === filter.name) ? style.filterChildActive : {}]}>
                                    <Text style={[style.filterItemText, {color: '#999'}, this.state.cur && this.state.curFilter[this.state.cur.value] &&  this.state.curFilter[this.state.cur.value].find(({name}) => name === filter.name) ? style.filterChildActiveText : {}]}>{filter.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={[{
                    height: 1,
                    width: SCREEN_WIDTH,
                    backgroundColor: '#f2f2f2'
                }]}/>
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
        padding: 10,
        paddingVertical: 5,
        margin: 7,
        marginVertical: 5,
        borderRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent'
    },
    filterItemText: {
        color: COLOR.textNormal,
        fontSize: 14
    },
    filterParentActive: {
        backgroundColor: COLOR.textLightNormal
    },
    filterParentActiveText: {
        color: '#fff'
    },
    filterChildActive: {
        borderBottomWidth: 1,
        borderBottomColor: COLOR.textLightNormal,
        borderRadius: 0
    },
    filterChildActiveText: {
        color: COLOR.textNormal
    },
    icon: {
        width: 24,
        height: 24,
        marginTop: 7
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
