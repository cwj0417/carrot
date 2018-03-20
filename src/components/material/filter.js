import React, {Component} from 'react'

import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {connect} from 'react-redux'

import {COLOR} from '../../config'

import {Icon} from 'native-base'

import {filter} from '../../appData'

import {material_filter, state_set} from '../../store/action/index'

const PADDING = 12

class Filter extends Component {

    constructor(props) {

        super(props)

        this.state = {
            filter
        }
    }

    render() {
        const filterData = () => {
            setTimeout(() => {
                this.props.material_filter(this.props.curFilter)
            })
        }
        const toggleFilter = filter => {
            let current = this.props.curFilter[this.props.cur.value] || []
            let res = []
            for (let item of this.props.cur.enum) {
                let curHas = current.find(({name}) => name === item.name)
                let targetHas = filter.name === item.name
                if (curHas || targetHas) {
                    if (!(curHas && targetHas)) {
                        res.push(item)
                    }
                }
            }
            this.props.state_set('curFilter', {...this.props.curFilter, [this.props.cur.value]: res})
            filterData()
        }
        const reverse = () => {
            let reversed = []
            if (this.props.curFilter[this.props.cur.value]) {
                for (let item of this.props.cur.enum) {
                    if (!this.props.curFilter[this.props.cur.value].find(({name}) => name === item.name)) {
                        reversed.push(item)
                    }
                }
            } else {
                reversed = this.props.cur.enum
            }
            this.props.state_set('curFilter', {...this.props.curFilter, [this.props.cur.value]: reversed})
            filterData()
        }
        return (
            <View>
                <View style={[style.filter, {paddingLeft: 0, marginLeft: 12}]}>
                    <ScrollView horizontal>
                        {this.state.filter.map((filter, index) => (
                            <TouchableOpacity onPress={() => this.props.state_set('cur', filter)} key={index}>
                                <View
                                    style={[style.filterItem, filter.name ? {} : {display: 'none'}, this.props.cur.value === filter.value ? style.filterParentActive : {}]}>
                                    <Text
                                        style={[style.filterItemText, this.props.cur.value === filter.value ? style.filterParentActiveText : {}]}>{filter.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={style.filter}>
                    <ScrollView horizontal>
                        <TouchableOpacity onPress={reverse}>
                            <View style={[style.filterItem]}>
                                <Icon style={[style.filterItemText, style.swap, {
                                    fontSize: 19,
                                    paddingLeft: 18,
                                    paddingRight: 6
                                }]} name="ios-swap"/>
                            </View>
                        </TouchableOpacity>
                        {this.state.filter.filter(({value}) => value === this.props.cur.value)[0].enum.map((filter, index) => (
                            <TouchableOpacity onPress={() => toggleFilter(filter)} key={index}>
                                <View style={[style.filterItem, {
                                    paddingHorizontal: 0,
                                    marginHorizontal: 12
                                }, this.props.cur && this.props.curFilter[this.props.cur.value] && this.props.curFilter[this.props.cur.value].find(({name}) => name === filter.name) ? style.filterChildActive : {}]}>
                                    <Text
                                        style={[style.filterItemText, {
                                            fontSize: 19
                                        }, this.props.cur && this.props.curFilter[this.props.cur.value] && this.props.curFilter[this.props.cur.value].find(({name}) => name === filter.name) ? style.filterChildActiveText : {}]}>{filter.name}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    cur: state.state.cur,
    curFilter: state.state.curFilter
})

const mapDispatchToProps = {
    state_set,
    material_filter
}


export default connect(mapStateToProps, mapDispatchToProps)(Filter)

const style = StyleSheet.create({
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
    }
})
