import React from 'react'

import Restaurants from '../../data/restaurants'
import InfoBlock from '../InfoBlock/InfoBlock'

class RestaurantsInfo extends React.Component {

    render(){
        return Restaurants.map((info: any) => <InfoBlock data={info} />)  
    }
}

export default RestaurantsInfo
