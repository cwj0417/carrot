import React, {Component} from 'react'

import {AlertIOS, Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

import {connect} from 'react-redux'

import Modal from 'react-native-modalbox'

import {COLOR, SCREEN_HEIGHT, SCREEN_WIDTH} from '../../config'

import List from './list'

import Filter from './filter'

import ExpendedStatus from './expendedStatus'

import Status from './status'

import {Icon} from 'native-base'

import {filter} from '../../appData'

import {
    material_filter,
    material_init,
    material_list_set,
    state_set,
    tag_create,
    tag_delete,
    tag_init
} from '../../store/action/index'

class Main extends Component {

    constructor(props) {

        super(props)

        this.state = {
            filter,
            statusExpended: true
        }
    }

    componentDidMount() {
        this.props.material_init()
        this.props.tag_init()
        this.props.state_set('cur', this.state.filter[0])
    }

    static navigationOptions = () => {
        const search = txt => {
            console.warn(txt)
        }

        const openModal = () => {
            this.refs.modal.open()
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
                    <TouchableOpacity onPress={openModal}>
                        <View style={style.headerLeft}>
                            <Image style={style.icon} source={require('../../assets/reset.png')}/>
                        </View>
                    </TouchableOpacity>
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
                this.props.material_filter(this.props.curFilter)
            })
        }
        const isEmpty = (filter) => {
            for (let key in filter) {
                if (filter[key].length) return false
            }
            return true
        }
        const getCurrentTag = () => {
            // return tag name or false when not matched
            return false
        }
        const setNewTag = () => {
            AlertIOS.prompt(
                '新建标签',
                '输入标签名',
                tagName => {
                    if (!getCurrentTag()) {
                        this.props.tag_create(tagName, this.props.curFilter)
                    }
                })
        }
        return (
            <View style={style.wrap}>
                {/* status*/}
                <View style={[style.statusWrap, isEmpty(this.props.curFilter) ? {display: 'none'} : {}]}>
                    <View style={style.statusDisplay}>
                        {this.state.statusExpended && (
                            <ExpendedStatus />
                        ) || (
                            <Status />
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
                            <Text onPress={setNewTag}
                                  style={[style.statusDisplayText, {fontSize: 16, flex: 1}]}>设为标签</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.refs.modal.open()}>
                            <View style={{flex: 1}}>
                                <Icon style={[style.statusDisplayText, {fontSize: 24}]} name="ios-code-working"/>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    <Filter/>
                    <View style={[{
                        height: 4,
                        width: SCREEN_WIDTH,
                        backgroundColor: '#f2f2f2'
                    }]}/>
                    {Object.entries(this.props.list).map(([key, value]) => (
                        <List key={key} cat={key} value={value} navigation={this.props.navigation}/>
                    ))}
                </ScrollView>
                <Modal style={{width: SCREEN_WIDTH, height: SCREEN_HEIGHT, opacity: 0.8}}
                       backdrop={false} position={'top'} ref={'modal'}>
                    <Text>
                        {JSON.stringify(this.state.curFilter)}
                    </Text>
                    {this.props.tags.map(tag => (
                        <View key={tag.name}>
                            <Text>{JSON.stringify(tag)}</Text>
                            <TouchableOpacity onPress={() => this.props.tag_delete(tag.name)}>
                                <Text>delete</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                    <Text style={{}}>Modal on top</Text>
                    <Button onPress={() => this.refs.modal.close()} title='close'/>
                </Modal>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        list: state.material.list,
        tags: state.tag.list,
        cur: state.state.cur,
        curFilter: state.state.curFilter
    }
}

const mapDispatchToProps = {
    material_init,
    material_list_set,
    material_filter,
    tag_init,
    tag_create,
    tag_delete,
    state_set
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

const PADDING = 12

const style = StyleSheet.create({
    wrap: {
        backgroundColor: '#fff',
        height: SCREEN_HEIGHT - 113,
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
    statusDisplayText: {
        fontSize: 19,
        color: '#fff',
        fontWeight: '500'
    },
    statusTagManage: {
        height: 40,
        backgroundColor: COLOR.backgroundDarker,
        flexDirection: 'row',
        padding: 10
    }
})
