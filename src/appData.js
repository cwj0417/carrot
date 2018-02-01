const gt = x => n => n >= x
const lt = x => n => n < x
const bt = (x, y) => n => n >=x && n < y
const eq = x => n => n === x
export const filter = [{
    name: '属性',
    value: 'property',
    field: 'property',
    emun: [{
        name: '热性',
        desc: eq(5)
    }, {
        name: '温性',
        desc: eq(4)
    }, {
        name: '中性',
        desc: eq(3)
    }, {
        name: '凉性',
        desc: eq(2)
    }, {
        name: '寒性',
        desc: eq(2)
    }]
}, {
    name: '酸碱',
    value: 'acidBase',
    field: 'acid',
    emun: [{
        name: '酸性',
        desc: gt(8)
    }, {
        name: '中性',
        desc: bt(6, 8)
    }, {
        name: '碱性',
        desc: lt(6)
    }]
}, {
    name: '消化',
    value: 'digestion',
    field: 'digestion',
    emun: [{
        name: '易消化',
        desc: eq(3)
    }, {
        name: '消化一般',
        desc: eq(2)
    }, {
        name: '难消化',
        desc: eq(1)
    }]
}, {
    name: '嘌呤',
    value: 'purine',
    field: 'purine',
    emun: [{
        name: '高嘌呤',
        desc: gt(200)
    }, {
        name: '中嘌呤',
        desc: bt(100, 200)
    }, {
        name: '低嘌呤',
        desc: lt(100)
    }]
}, {
    name: '测试',
    value: 'test1',
    emun: [{
        name: '测试1',
        desc: eq(0)
    }, {
        name: '很长的名字',
        desc: eq(0)
    }, {
        name: '特别长',
        desc: eq(0)
    }, {
        name: '我的描述有八个字',
        desc: eq(0)
    }]
}, {
    name: '测试长长长',
    value: 'test1',
    emun: [{
        name: '好好',
        desc: eq(0)
    }, {
        name: '惹',
        desc: eq(0)
    }, {
        name: '饿饿长',
        desc: eq(0)
    }, {
        name: '我的描述有十几个字呢',
        desc: eq(0)
    }]
}, {
    name: '测试超过最大宽度',
    value: 'test1',
    emun: [{
        name: '诶嘿嘿',
        desc: eq(0)
    }, {
        name: '哼',
        desc: eq(0)
    }, {
        name: '比比',
        desc: eq(0)
    }, {
        name: '哦哦哦',
        desc: eq(0)
    }]
}, {
    name: '',
    emun: []
}]