import {StackNavigator} from 'react-navigation'

import main from './main'

import detail from './detail'

export default StackNavigator({
    Main: {
        screen: main
    },
    Detail: {
        screen: detail
    }
})