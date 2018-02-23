import React, {Component} from 'react'

import {FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

import {connect} from 'react-redux'

import {COLOR, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../config'

import {Img} from '../../common/index'

import {Icon} from 'native-base'

import {filter} from '../../appData'

import {material_init, material_list_set, material_filter} from '../../store/action/index'

import {categories} from '../../coreData/meterial'

class Main extends Component {

    constructor(props) {

        super(props)

        this.state = {
            filter,
            cur: '',
            curFilter: {}
        }
    }

    componentDidMount() {
        this.props.material_init()
        this.setState({cur: this.state.filter[0]})
    }

    static navigationOptions = () => {
        const search = txt => {
            console.warn(txt)
        }
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
                                <Icon name="ios-search"
                                      style={{color: COLOR.backgroundNormal, fontSize: 20, lineHeight: 31}}/>
                                <TextInput onEndEditing={txt => search(txt)} placeholder="Search" style={{marginLeft: 10}}/>
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
        const filterData = () => {
            setTimeout(() => {
                this.props.material_filter(this.state.curFilter)
            })
        }
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
            filterData()
        }
        return (
            <View style={style.wrap}>
                <View style={style.filter}>
                    <ScrollView horizontal>
                        {this.state.filter.map((filter, index) => (
                            <TouchableOpacity onPress={() => this.setState({cur: filter})} key={index}>
                                <View
                                    style={[style.filterItem, filter.name ? {} : {display: 'none'}, this.state.cur.value === filter.value ? style.filterParentActive : {}]}>
                                    <Text
                                        style={[style.filterItemText, this.state.cur.value === filter.value ? style.filterParentActiveText : {}]}>{filter.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={style.filter}>
                    <ScrollView horizontal>
                        {this.state.filter.filter(({value}) => value === this.state.cur.value)[0].enum.map((filter, index) => (
                            <TouchableOpacity onPress={() => toggleFilter(filter)} key={index}>
                                <View style={[style.filterItem, {
                                    paddingHorizontal: 0,
                                    marginHorizontal: 17
                                }, this.state.cur && this.state.curFilter[this.state.cur.value] && this.state.curFilter[this.state.cur.value].find(({name}) => name === filter.name) ? style.filterChildActive : {}]}>
                                    <Text
                                        style={[style.filterItemText, {color: '#999'}, this.state.cur && this.state.curFilter[this.state.cur.value] && this.state.curFilter[this.state.cur.value].find(({name}) => name === filter.name) ? style.filterChildActiveText : {}]}>{filter.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={[{
                    height: 4,
                    width: SCREEN_WIDTH,
                    backgroundColor: '#f2f2f2'
                }]}/>
                <ScrollView>
                    {Object.entries(this.props.list).map(([key, value]) => (
                        <View style={style.detailWrap} key={key}>
                            <View style={style.cardTitleWrap}>
                                <Text style={style.cardTitle}>{categories[key]}</Text>
                                <Icon name="md-arrow-dropup"
                                      style={{fontSize: 16, paddingLeft: 10, color: COLOR.textLightNormal}}/>
                            </View>
                            <View style={style.cardWrap}>
                                <FlatList
                                    data={value}
                                    keyExtractor={item => item.en}
                                    numColumns={4}
                                    renderItem={({item}) => (
                                        <View key={item.en} style={style.cardItemWrap}>
                                            <Img
                                                onPress={() => this.props.navigation.navigate('Detail', {name: item.name})}
                                                style={style.cardImg} source={item.en}/>
                                            <View style={style.itemTextWrap}>
                                                <Image style={[style.itemTextImg, {flex: 1}]}
                                                       source={require('../../assets/menu.png')}/>
                                                <Text
                                                    style={[style.itemTextText, {flex: 3, textAlign: 'center'}]}
                                                    onPress={() => this.props.navigation.navigate('Detail', {name: item.name})}>{item.name}</Text>
                                                <Icon
                                                    style={[{fontSize: 14, color: COLOR.textLightNormal}, {flex: 1}]}
                                                    name="ios-add-circle-outline"/>
                                            </View>
                                        </View>
                                    )}
                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.material.list
    }
}

const mapDispatchToProps = {
    material_init,
    material_list_set,
    material_filter
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const style = StyleSheet.create({
    wrap: {
        backgroundColor: '#fff',
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
    },
    detailWrap: {},
    cardTitleWrap: {
        flexDirection: 'row',
        borderLeftWidth: 5,
        borderLeftColor: COLOR.textLightNormal,
        paddingLeft: 10,
        marginTop: 10,
        marginLeft: 10
    },
    cardTitle: {
        fontSize: 16
    },
    cardWrap: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        marginTop: 10
    },
    cardItemWrap: {
        width: (SCREEN_WIDTH - 50) / 4,
        backgroundColor: '#fff',
        margin: 10,
        marginRight: 0,
        padding: 10
    },
    cardImg: {
        width: SCREEN_WIDTH / 4 - 30,
        height: SCREEN_WIDTH / 4 - 30
    },
    itemTextWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5
    },
    itemTextText: {
        fontSize: 12,
        color: '#999'
    },
    itemTextImg: {
        width: 12,
        height: 12
    }
})
