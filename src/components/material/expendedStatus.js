import React, {Component} from 'react'

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {connect} from 'react-redux'

import {SCREEN_WIDTH} from '../../config'

import {Icon} from 'native-base'

import {filter} from '../../appData'

import {material_filter, state_set} from '../../store/action/index'

class ExpendedStatus extends Component {

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
        const removeCondition = (key, item) => {
            this.props.state_set(
                'curFilter', {
                    ...this.props.curFilter,
                    [key]: this.props.curFilter[key].filter(({name}) => name !== item.name)
                })
            filterData()
        }
        const getSize = num => {
            return Math.min((SCREEN_WIDTH / 4 - 16) / num, 19)
        }
        return (
            <View style={style.statusDisplayExtended}>
                {Object.keys(this.props.curFilter).map(key => {
                    return this.props.curFilter[key].map(item => (
                        <TouchableOpacity key={item.name} onPress={() => {
                            removeCondition(key, item)
                        }}>
                            <View
                                style={[style.statusItem, {paddingHorizontal: (SCREEN_WIDTH / 4 - (getSize(item.name.length + 1) * (item.name.length + 1) + 6)) / 2}]}>
                                <Icon
                                    style={[style.statusItemText, {paddingRight: 6}, {fontSize: getSize(item.name.length + 1)}]}
                                    name="ios-remove-circle-outline"/>
                                <Text
                                    style={[style.statusItemText, {fontSize: getSize(item.name.length + 1)}]}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                })}
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


export default connect(mapStateToProps, mapDispatchToProps)(ExpendedStatus)

const style = StyleSheet.create({
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
    }
})
