import React, {Component} from 'react'

import {StyleSheet, Text, TouchableOpacity, View, ScrollView} from 'react-native'

import {Img} from '../../common/index'

import {Icon} from 'native-base'

import {connect} from 'react-redux'

import {COLOR, SCREEN_HEIGHT} from '../../config'

class Detail extends Component {
    constructor(props) {
        super(props)
        this.flatted = []
    }

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.item.name,
            headerStyle: {
                backgroundColor: COLOR.backgroundNormal
            },
            headerTitleStyle: {
                color: COLOR.textLightNormal
            },
            headerBackTitleStyle: {
                color: COLOR.textLightNormal
            }
        }
    }

    concat(obj) {
        let res = []
        for (let item of Object.values(obj)) {
            res = res.concat(item)
        }
        return res
    }

    componentWillMount() {
        this.flatted = this.concat(this.props.list)
    }

    render() {
        const pre = () => {
            let cur = this.flatted.findIndex(({name}) => this.props.navigation.state.params.item.name === name)
            this.props.navigation.setParams({
                item: this.flatted[Math.max(0, cur - 1)]
            })
        }
        const next = () => {
            let cur = this.flatted.findIndex(({name}) => this.props.navigation.state.params.item.name === name)
            this.props.navigation.setParams({
                item: this.flatted[Math.min(this.flatted.length - 1, cur + 1)]
            })
        }

        let item = this.props.navigation.state.params.item
        return (
            <View style={style.wrap}>
                <View style={style.head}>
                    <TouchableOpacity style={style.jump} onPress={pre}>
                        <View>
                            <Icon name='md-arrow-dropleft'> </Icon>
                        </View>
                    </TouchableOpacity>
                    <View style={style.name}>
                        <Img style={style.img} source={item.en}/>
                    </View>
                    <TouchableOpacity style={style.jump} onPress={next}>
                        <View>
                            <Icon name='md-arrow-dropright'> </Icon>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={style.detailWrap}>
                    <ScrollView>
                        {Object.keys(item).map((key, index) => (
                            <View key={index} style={[style.line, index % 2 === 0 ? style.stripedLine : {}]}>
                                <View>
                                    <Text>
                                        {key}
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        ...
                                    </Text>
                                </View>
                                <View>
                                    <Text>
                                        {item[key]}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
                <View style={style.menu}>
                    <Text>
                        查看菜谱... 加到菜篮
                    </Text>
                </View>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        list: state.material.list
    }
}

export default connect(mapStateToProps)(Detail)

const style = StyleSheet.create({
    wrap: {
        backgroundColor: '#fff',
        height: SCREEN_HEIGHT - 113,
    },
    head: {
        height: 170,
        flexDirection: 'row'
    },
    jump: {
        flex: 1
    },
    name: {
        flex: 3
    },
    img: {
        height: 100,
        width: 100
    },
    detailWrap: {

    },
    line: {
        flexDirection: 'row'
    },
    stripedLine: {

    },
    menu: {

    }
})