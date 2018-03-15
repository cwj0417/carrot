import {AsyncStorage} from 'react-native'

export const storage = {
    getItem (key, defaultValue = []) {
        return AsyncStorage.getItem(key)
            .then(res => {
                if (res === null) {
                    return defaultValue
                }
                return JSON.parse(res)
            }, err => Promise.reject(err))
    },
    setItem (key, value) {
        return AsyncStorage.setItem(key, JSON.stringify(value))
            .then(err => {
                return err ? Promise.reject() : Promise.resolve()
            }, err => Promise.reject(err))
    }
}