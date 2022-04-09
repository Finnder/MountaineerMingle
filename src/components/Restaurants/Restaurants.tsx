import React from 'react'

import Restaurants from '../../data/restaurants'
import InfoBlock from '../InfoBlock/InfoBlock'

import {Stack } from 'react-bootstrap'

class RestaurantsInfo extends React.Component {

    render(){
        return(
            <div>
                <Stack direction="horizontal">
                    <InfoBlock data={Restaurants[0]} />
                    <InfoBlock data={Restaurants[1]} />
                    <InfoBlock data={Restaurants[2]} />
                    <InfoBlock data={Restaurants[3]} />
                </Stack>
            
                <br/>

                <Stack direction="horizontal">
                    <InfoBlock data={Restaurants[4]} />
                    <InfoBlock data={Restaurants[5]} />
                </Stack>

                <br/>
                <br/>
                <br/> 
            </div>
        )
    }
}

export default RestaurantsInfo
