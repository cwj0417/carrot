import {Dimensions} from 'react-native'

export const DEBUG = __DEV__ // eslint-disable-line no-undef
export const IN_DEBUGGER = DEBUG && !!window.navigator.userAgent

export const VERSION = '1.1.0'

let {width, height} = Dimensions.get('window')
export const SCREEN_WIDTH = width
export const SCREEN_HEIGHT = height
export const STATUS_BAR_HEIGHT = 20
export const NAV_BAR_HEIGHT = 64
export const TAB_BAR_HEIGHT = 50

// base_width, base_height, defaultPixel : 以 iphone6s 为默认标准进行适配
export const BASE_HEIGHT = 667
export const BASE_WIDTH = 375
export const DEFAULT_PIXEL = 2

export const ENVS = {
    production: {
        api_base_url: 'http://192.168.100.62',
        web_socket_host: 'http://192.168.100.62'
    },
    testing: {
        api_base_url: 'http://192.168.100.62'
    },
    development: {
        api_base_url: 'http://192.168.100.62'
    }
}

export const COLOR = {
    theme: '#f27737',
    favored: '#C71A22',
    textPrompt: '#929292',
    textNormal: '#333333',
    textEmpha: '#212121',
    textLightPrompt: '#EBEBEB',
    textLightNormal: '#f19835',
    backgroundDarker: '#f7ab43',
    backgroundNormal: '#ff9400',
    backgroundLighter: '#fdbe50',
    backgroundDarkLighter: '#424242',
    backgroundDarkNormal: '#000000',
    backgroundNotice: '#FFFB00',
    linePrompt: '#EBEBEB',
    lineNormal: '#A9A9A9',
    lineEmpha: '#929292'
}