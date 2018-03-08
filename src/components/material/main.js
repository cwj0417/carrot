import React, {Component} from 'react'

import {FlatList, Image, ScrollView, StyleSheet, Text, TextInput, Button, TouchableOpacity, View} from 'react-native'

import {connect} from 'react-redux'

import Modal from 'react-native-modalbox'

import {COLOR, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../config'

import {Img} from '../../common/index'

import {Icon} from 'native-base'

import {filter} from '../../appData'

import {material_filter, material_init, material_list_set, tag_init} from '../../store/action/index'

import {categories} from '../../coreData/meterial'

class Main extends Component {

    constructor(props) {

        super(props)

        this.state = {
            filter,
            cur: '',
            curFilter: {},
            statusExpended: true
        }
    }

    componentDidMount() {
        this.props.material_init()
        this.props.tag_init()
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
        const reverse = () => {
            let reversed = []
            if (this.state.curFilter[this.state.cur.value]) {
                for (let item of this.state.cur.enum) {
                    if (!this.state.curFilter[this.state.cur.value].find(({name}) => name === item.name)) {
                        reversed.push(item)
                    }
                }
            } else {
                reversed = this.state.cur.enum
            }
            this.setState({curFilter: {...this.state.curFilter, [this.state.cur.value]: reversed}})
            filterData()
        }
        const removeCondition = (key, item) => {
            this.setState({
                curFilter: {
                    ...this.state.curFilter,
                    [key]: this.state.curFilter[key].filter(({name}) => name !== item.name)
                }
            })
            filterData()
        }
        const isEmpty = (filter) => {
            for (let key in filter) {
                if (filter[key].length) return false
            }
            return true
        }
        const getSize = num => {
            return Math.min((SCREEN_WIDTH / 4 - 16) / num, 19)
        }
        return (
            <View style={style.wrap}>
                {/* status*/}
                <View style={[style.statusWrap, isEmpty(this.state.curFilter) ? {display: 'none'} : {}]}>
                    <View style={style.statusDisplay}>
                        {this.state.statusExpended && (
                            <View style={style.statusDisplayExtended}>
                                {Object.keys(this.state.curFilter).map(key => {
                                    return this.state.curFilter[key].map(item => (
                                        <TouchableOpacity key={item.name} onPress={() => {
                                            removeCondition(key, item)
                                        }}>
                                            <View style={[style.statusItem, {paddingHorizontal: (SCREEN_WIDTH / 4 - (getSize(item.name.length + 1) * (item.name.length + 1) + 6)) / 2}]}>
                                                <Icon style={[style.statusItemText, {paddingRight: 6}, {fontSize: getSize(item.name.length + 1)}]}
                                                      name="ios-remove-circle-outline"/>
                                                <Text
                                                    style={[style.statusItemText, {fontSize: getSize(item.name.length + 1)}]}>{item.name}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                })}
                            </View>
                        ) || (
                            <ScrollView horizontal style={style.statusDisplayExtended}>
                                {Object.keys(this.state.curFilter).map(key => {
                                    return this.state.curFilter[key].map(item => (
                                        <View style={{flexDirection: 'row', marginBottom: 15}} key={item.name}>
                                            <TouchableOpacity onPress={() => {
                                                removeCondition(key, item)
                                            }}>
                                                <Icon style={[style.statusDisplayText, {paddingRight: 4}]}
                                                      name="ios-remove-circle-outline"/>
                                            </TouchableOpacity>
                                            <Text
                                                style={[style.statusDisplayText, {paddingRight: 8}]}>{item.name}</Text>
                                        </View>
                                    ))
                                })}
                            </ScrollView>
                        )}
                    </View>
                    <View style={style.statusTagManage}>
                        <View style={{flex: 1}}>
                            <TouchableOpacity
                                onPress={() => this.setState(({statusExpended}) => ({statusExpended: !statusExpended}))}>
                                <Icon
                                    style={[style.statusDisplayText, {fontSize: 24}, this.state.statusExpended ? {} : {display: 'none'}]}
                                    name="ios-arrow-round-up"/>
                                <Icon
                                    style={[style.statusDisplayText, {fontSize: 24}, this.state.statusExpended ? {display: 'none'} : {}]}
                                    name="ios-arrow-round-down"/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex: 3}}>
                            <TextInput/>
                        </View>
                        <View style={{flex: 2}}>
                            <Text style={[style.statusDisplayText, {fontSize: 16, flex: 1}]}>设为标签</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.refs.modal.open()}>
                            <View style={{flex: 1}}>
                                <Icon style={[style.statusDisplayText, {fontSize: 24}]} name="ios-code-working"/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                     {/*filter*/}
                    <View style={[style.filter, {paddingLeft: 0, marginLeft: 12}]}>
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
                            <TouchableOpacity onPress={reverse}>
                                <View style={[style.filterItem]}>
                                    <Icon style={[style.filterItemText, style.swap, {fontSize: 19, paddingLeft: 18, paddingRight: 6}]} name="ios-swap"/>
                                </View>
                            </TouchableOpacity>
                            {this.state.filter.filter(({value}) => value === this.state.cur.value)[0].enum.map((filter, index) => (
                                <TouchableOpacity onPress={() => toggleFilter(filter)} key={index}>
                                    <View style={[style.filterItem, {
                                        paddingHorizontal: 0,
                                        marginHorizontal: 12
                                    }, this.state.cur && this.state.curFilter[this.state.cur.value] && this.state.curFilter[this.state.cur.value].find(({name}) => name === filter.name) ? style.filterChildActive : {}]}>
                                        <Text
                                            style={[style.filterItemText, {
                                                fontSize: 19
                                            }, this.state.cur && this.state.curFilter[this.state.cur.value] && this.state.curFilter[this.state.cur.value].find(({name}) => name === filter.name) ? style.filterChildActiveText : {}]}>{filter.name}</Text>
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
                     {/*list*/}
                    {Object.entries(this.props.list).map(([key, value]) => (
                        <View style={style.detailWrap} key={key}>
                            <View style={style.cardTitleWrap}>
                                <Text style={style.cardTitle}>{categories[key]}</Text>
                                <Icon name="md-arrow-dropup"
                                      style={{fontSize: 18, paddingLeft: 8, color: COLOR.textLightNormal}}/>
                            </View>
                            <View style={style.cardWrap}>
                                <FlatList
                                    columnWrapperStyle={{borderTopWidth: 1, borderTopColor: '#f2f2f2'}}
                                    data={value}
                                    keyExtractor={item => item.en}
                                    numColumns={3}
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
                                                    style={[{fontSize: 18, color: COLOR.textLightNormal}, {flex: 1}]}
                                                    name="ios-add-circle-outline"/>
                                            </View>
                                        </View>
                                    )}
                                />
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <Modal style={{width: SCREEN_WIDTH * 0.8, height: SCREEN_HEIGHT * 0.6, borderRadius: 10}} backdrop={false}  position={'top'} ref={'modal'}>
                    <Text style={{}}>Modal on top</Text>
                    <Button onPress={() => this.refs.modal.close()} title='close' />
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.material.list,
        tags: state.tag.list
    }
}

const mapDispatchToProps = {
    material_init,
    material_list_set,
    material_filter,
    tag_init
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const PADDING = 12

const style = StyleSheet.create({
    wrap: {
        backgroundColor: '#fff',
        height: SCREEN_HEIGHT - 113,
    },
    filter: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        padding: PADDING,
        borderBottomColor: '#f2f2f2',
        borderBottomWidth: 1
    },
    filterItem: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginHorizontal: 2,
        marginVertical: 1,
        borderRadius: 15,
        borderBottomWidth: 1,
        borderBottomColor: 'transparent'
    },
    filterItemText: {
        color: COLOR.textNormal,
        fontSize: 20
    },
    swap: {
        color: COLOR.textLightNormal
    },
    filterParentActive: {
        // backgroundColor: COLOR.textLightNormal
    },
    filterParentActiveText: {
        // color: '#fff'
        fontSize: 22,
        fontWeight: '900'
    },
    filterChildActive: {
        borderBottomWidth: 1,
        borderBottomColor: COLOR.textLightNormal,
        borderRadius: 0
    },
    filterChildActiveText: {
        color: COLOR.textLightNormal
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
    statusWrap: {
        backgroundColor: COLOR.backgroundNormal
    },
    statusDisplay: {
        borderBottomWidth: 2,
        borderBottomColor: '#fff'
    },
    statusDisplayText: {
        fontSize: 19,
        color: '#fff',
        fontWeight: '500'
    },
    statusDisplayExtended: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    statusItem: {
        width: SCREEN_WIDTH / 4,
        height: 45,
        padding: 5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#fdad4f'
    },
    statusItemText: {
        lineHeight: 34,
        color: '#fff',
        fontWeight: '500'
    },
    statusTagManage: {
        height: 40,
        backgroundColor: COLOR.backgroundDarker,
        flexDirection: 'row',
        padding: 10
    },
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
