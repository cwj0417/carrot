export const categories = {
    grain: '谷物',
    meat: '肉类',
    fruit: '水果',
    vegetable: '蔬菜',
    beanProduct: '豆制品',
    seaFood: '海鲜'
}

// content and unit was based on per 100g.
export const properties = {
    nature: {
        name: '性质',
        unit: null
    },
    acid: {
        name: '酸碱',
        unit: null
    },
    sugar: {
        name: '糖份',
        unit: 'g'
    },
    purine: {
        name: '嘌呤',
        unit: 'mg'
    },
    heat: {
        name: '热量',
        unit: 'kCal'
    }
}

// use en to map image

export const list = [{
    name: '燕麦',
    en: 'oats',
    cat: 'grain'
}, {
    name: '大米',
    en: 'rice',
    cat: 'grain'
}, {
    name: '猪肉',
    en: 'pork',
    cat: 'meat'
}, {
    name: '牛肉',
    en: 'beef',
    cat: 'meat'
}, {
    name: '鸭肉',
    en: 'duck',
    cat: 'meat'
}, {
    name: '鸡肉',
    en: 'chicken',
    cat: 'meat'
}, {
    name: '羊肉',
    en: 'mutton',
    cat: 'meat'
}, {
    name: '苹果',
    en: 'apple',
    cat: 'fruit'
}, {
    name: '桃子',
    en: 'peach',
    cat: 'fruit'
}, {
    name: '白菜',
    en: 'cabbage',
    cat: 'vegetable'
}, {
    name: '菠菜',
    en: 'spinach',
    cat: 'vegetable'
}, {
    name: '豆腐',
    en: 'curd',
    cat: 'beanProduct'
}, {
    name: '豆皮',
    en: 'rosa',
    cat: 'beanProduct'
}, {
    name: '带鱼',
    en: 'hairtail',
    cat: 'seaFood'
}, {
    name: '甜虾',
    en: 'amaebi',
    cat: 'seaFood'
}]