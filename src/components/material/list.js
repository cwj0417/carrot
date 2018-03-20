import React, {Component} from 'react'

import {FlatList, Image, StyleSheet, Text, View} from 'react-native'

import {COLOR, SCREEN_WIDTH} from '../../config'

import {Img} from '../../common/index'

import {Icon} from 'native-base'

import {categories} from '../../coreData/meterial'

const PADDING = 12

export default class List extends Component {
    render() {
        return (
            <View style={style.detailWrap}>
                <View style={style.cardTitleWrap}>
                    <Text style={style.cardTitle}>{categories[this.props.cat]}</Text>
                    <Icon name='md-arrow-dropup'
                          style={{fontSize: 18, paddingLeft: 8, color: COLOR.textLightNormal}}/>
                </View>
                <View style={style.cardWrap}>
                    <FlatList
                        columnWrapperStyle={{borderTopWidth: 1, borderTopColor: '#f2f2f2'}}
                        data={this.props.value}
                        keyExtractor={item => item.en}
                        numColumns={3}
                        renderItem={({item}) => (
                            <View key={item.en} style={style.cardItemWrap}>
                                <Img
                                    onPress={() => this.props.navigation.navigate('Detail', {item})}
                                    style={style.cardImg} source={item.en}/>
                                <View style={style.itemTextWrap}>
                                    <Image style={[style.itemTextImg, {flex: 1}]}
                                           source={require('../../assets/menu.png')}/>
                                    <Text
                                        style={[style.itemTextText, {flex: 3, textAlign: 'center'}]}
                                        onPress={() => this.props.navigation.navigate('Detail', {name: item.name})}>{item.name}</Text>
                                    <Icon
                                        style={[{fontSize: 18, color: COLOR.textLightNormal}, {flex: 1}]}
                                        name="ios-add-circle-outline"/>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    detailWrap: {
        borderTopWidth: 1,
        borderTopColor: '#f2f2f2'
    },
    cardTitleWrap: {
        flexDirection: 'row',
        height: 18,
        borderLeftWidth: 4,
        borderLeftColor: COLOR.textLightNormal,
        paddingLeft: 12,
        margin: 15,
        marginBottom: 8
    },
    cardTitle: {
        fontSize: 18
    },
    cardWrap: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginTop: 10
    },
    cardItemWrap: {
        width: (SCREEN_WIDTH - 2) / 3,
        backgroundColor: '#fff',
        marginTop: 10,
        marginBottom: 15,
        padding: 20,
        borderRightColor: '#f2f2f2',
        borderRightWidth: 1
    },
    cardImg: {
        width: (SCREEN_WIDTH - 2) / 3 - 40,
        height: (SCREEN_WIDTH - 2) / 3 - 40
    },
    itemTextWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    itemTextText: {
        fontSize: 16,
        color: '#999'
    },
    itemTextImg: {
        width: 16,
        height: 16
    }
})
