const gt = x => n => n >= x
const lt = x => n => n < x
const bt = (x, y) => n => n >= x && n < y
const eq = x => n => n === x
export const filter = [{
    name: '性质',
    value: 'nature',
    enum: [{
        name: '热性',
        desc: eq(4)
    }, {
        name: '温性',
        desc: eq(3)
    }, {
        name: '凉性',
        desc: eq(2)
    }, {
        name: '寒性',
        desc: eq(1)
    }]
}, {
    name: '酸碱',
    value: 'acid',
    enum: [{
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
    name: '糖份',
    value: 'sugar',
    enum: [{
        name: '高糖',
        desc: gt(300)
    }, {
        name: '中糖',
        desc: bt(100, 300)
    }, {
        name: '低糖',
        desc: lt(100)
    }]
}, {
    name: '嘌呤',
    value: 'purine',
    enum: [{
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
    name: '热量',
    value: 'heat',
    enum: [{
        name: '高热量',
        desc: gt(500)
    }, {
        name: '中热量',
        desc: bt(100, 500)
    }, {
        name: '低热量',
        desc: lt(100)
    }]
}, {
    name: '',
    enum: []
}]
