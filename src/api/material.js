import {list, categories} from '../coreData/meterial'

import groupBy from 'lodash.groupby'

export const api_material = {
    init () {
        return groupBy(list, 'cat')
    },
    filter (filter) {
        let res = list
        for (let [key, value] of Object.entries(filter)) {
            for (let {desc} of value) {
                res = res.filter(item => desc(item[key]))
            }
        }
        return groupBy(res, 'cat')
    }
}