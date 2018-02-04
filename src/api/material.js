import {list, categories} from '../coreData/meterial'

import groupBy from 'lodash.groupby'

export const api_material = {
    init () {
        return groupBy(list, 'cat')
    },
    filter (filter) {
        let res = list.filter(item => {
            let tag = true
            for (let [key, value] of Object.entries(filter)) {
                let tmp = false
                for (let {desc} of value) {
                    if (desc(item[key])) {
                        tmp = true
                    }
                }
                if (!tmp && value.length) {
                    tag = false
                }
            }
            return tag
        })
        return groupBy(res, 'cat')
    }
}