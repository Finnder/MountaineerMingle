import React from 'react'

import OutdoorPlaces from '../../data/outdoor'
import InfoBlock from '../InfoBlock/InfoBlock'

import {Stack} from 'react-bootstrap'

class OutdoorInfo extends React.Component {

    render(){
        return(
            <div className="OutdoorPlacesInfo">
                <Stack direction="horizontal">
                    <InfoBlock data={OutdoorPlaces[0]} />
                    <InfoBlock data={OutdoorPlaces[1]} />
                    <InfoBlock data={OutdoorPlaces[2]} />
                    <InfoBlock data={OutdoorPlaces[3]} />
                </Stack>
            
                <br/>

                <Stack direction="horizontal">
                    <InfoBlock data={OutdoorPlaces[4]} />
                    <InfoBlock data={OutdoorPlaces[5]} />
                    <InfoBlock data={OutdoorPlaces[6]} />
                    <InfoBlock data={OutdoorPlaces[7]} />
                </Stack>

                <br/>
                <br/>
                <br/> 
            </div>
        )
    }
}

export default OutdoorInfo
