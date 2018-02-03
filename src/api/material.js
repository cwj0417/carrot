import {list, categories} from '../coreData/meterial'

import groupBy from 'lodash.groupby'

export const api_material = {
    init () {
        return groupBy(list, 'cat')
    }
}