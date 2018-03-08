import {AsyncStorage} from 'react-native'

export const storage = {
    getItem (key, defaultValue = []) {
        return AsyncStorage.getItem(key)
            .then(res => {
                if (res === null) {
                    return defaultValue
                }
                return res
            }, err => {
                return Promise.reject(err)
            })
    },
    setItem (key, value) {

    }
}