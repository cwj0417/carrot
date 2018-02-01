import {PixelRatio} from 'react-native'
import {BASE_HEIGHT, BASE_WIDTH, DEFAULT_PIXEL, SCREEN_HEIGHT, SCREEN_WIDTH} from '../config'


let fontScale = PixelRatio.getFontScale() //返回字体大小缩放比例
let pixelRatio = PixelRatio.get() //当前设备的像素密度
const scale = Math.min(SCREEN_HEIGHT / BASE_HEIGHT, SCREEN_WIDTH / BASE_WIDTH) //获取缩放比例

// 设置字体大小自适应
export function setText(size) {
    size = Math.round((size * scale + 0.5) * pixelRatio / fontScale)
    return size / DEFAULT_PIXEL
}

// 设置布局大小自适应
export function setLayout(size) {
    size = Math.round(size * scale + 0.5)
    return size
}