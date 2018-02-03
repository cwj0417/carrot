import React, {Component} from 'react'
import {Image, TouchableOpacity} from 'react-native'

export class Img extends Component {
    render () {
        let {onPress, source, ...props} = this.props
        let img
        switch (source) {
            case 'amaebi':
                img = require('../coreData/imgs/amaebi.png')
                break
            case 'apple':
                img = require('../coreData/imgs/apple.png')
                break
            case 'beef':
                img = require('../coreData/imgs/beef.png')
                break
            case 'cabbage':
                img = require('../coreData/imgs/cabbage.png')
                break
            case 'chicken':
                img = require('../coreData/imgs/chicken.png')
                break
            case 'curd':
                img = require('../coreData/imgs/curd.png')
                break
            case 'duck':
                img = require('../coreData/imgs/duck.png')
                break
            case 'hairtail':
                img = require('../coreData/imgs/hairtail.png')
                break
            case 'mutton':
                img = require('../coreData/imgs/mutton.png')
                break
            case 'oats':
                img = require('../coreData/imgs/oats.png')
                break
            case 'peach':
                img = require('../coreData/imgs/peach.png')
                break
            case 'pork':
                img = require('../coreData/imgs/pork.png')
                break
            case 'rice':
                img = require('../coreData/imgs/rice.png')
                break
            case 'rosa':
                img = require('../coreData/imgs/rosa.png')
                break
            case 'spinach':
                img = require('../coreData/imgs/spinach.png')
                break
        }
        return (
            <TouchableOpacity onPress={onPress}>
                <Image source={img} {...props}/>
            </TouchableOpacity>
        )
    }
}
