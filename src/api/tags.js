import {storage} from '../util/index'

export const api_tag = {
    init () {
        return storage.get('tag')
    }
}