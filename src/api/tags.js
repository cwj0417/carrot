import {storage} from '../util/index'

export const api_tag = {
    init () {
        return storage.getItem('tag')
    },
    create (name, content) {
        return storage.getItem('tag')
            .then(list => {
                if (list.find(item => item.name === name)) {
                    return Promise.reject
                } else {
                    list.push({name, content})
                    return storage.setItem('tag', list)
                        .then(res => {
                            return {name, content}
                        })
                }
            })
    }
}