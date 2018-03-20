import React, {Component} from 'react'

import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {connect} from 'react-redux'

import {Icon} from 'native-base'

import {filter} from '../../appData'

import {material_filter, state_set} from '../../store/action/index'

class Status extends Component {

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
        return (
            <ScrollView horizontal style={style.statusDisplayExtended}>
                {Object.keys(this.props.curFilter).map(key => {
                    return this.props.curFilter[key].map(item => (
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


export default connect(mapStateToProps, mapDispatchToProps)(Status)

const style = StyleSheet.create({
    statusDisplayExtended: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    statusDisplay: {
        borderBottomWidth: 2,
        borderBottomColor: '#fff'
    },
    statusDisplayText: {
        fontSize: 19,
        color: '#fff',
        fontWeight: '500'
    }
})
