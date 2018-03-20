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
    },
    delete (name) {
        return new Promise(resolve => {
            storage.getItem('tag')
                .then(res => {
                    let index = res.findIndex(each => each.name === name)
                    if (index === -1) {
                        resolve(res)
                    } else {
                        storage.setItem('tag', res.splice(index, 1))
                            .then(suc => {
                                resolve(res)
                            })
                    }
                })
        })
    }
}