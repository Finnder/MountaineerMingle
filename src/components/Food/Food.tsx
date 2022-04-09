import React from 'react'
import { Stack } from 'react-bootstrap'
import FoodPlaces from '../../data/foodplaces'
import InfoBlock from '../InfoBlock/InfoBlock'

class FoodInfo extends React.Component {

    render(){
        return(
            <div className="justify-content-center">
                <Stack direction="horizontal">
                    <InfoBlock data={FoodPlaces[0]} />
                    <InfoBlock data={FoodPlaces[1]} />
                    <InfoBlock data={FoodPlaces[2]} />
                    <InfoBlock data={FoodPlaces[3]} />
                </Stack>
            
                <br/>

                <Stack direction="horizontal">
                    <InfoBlock data={FoodPlaces[4]} />
                    <InfoBlock data={FoodPlaces[5]} />
                    <InfoBlock data={FoodPlaces[6]} />
                </Stack>

                <br/>
                <br/>
                <br/> 
            </div>
        )
    }
}

export default FoodInfo 
