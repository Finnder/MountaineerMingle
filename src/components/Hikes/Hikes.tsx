import React from 'react'

import { Stack } from 'react-bootstrap'

import GrandfatherMountain from '../../images/BGS/background_hikes.jpeg'

import Hikes from '../../data/hikes'
import InfoBlock from '../InfoBlock/InfoBlock'

class HikesInfo extends React.Component {

    render(){
        return(
            <div style={{
                background: `${GrandfatherMountain}`,
            }}>
                <Stack direction="horizontal">
                    <InfoBlock data={Hikes[0]} />
                    <InfoBlock data={Hikes[1]} />
                    <InfoBlock data={Hikes[2]} />
                    <InfoBlock data={Hikes[3]} />
                </Stack>
            
                <br/>

                <Stack direction="horizontal">
                    <InfoBlock data={Hikes[4]} />
                    <InfoBlock data={Hikes[5]} />
                </Stack>

                <br/>
                <br/>
                <br/> 
            </div>
    )
    }
}

export default HikesInfo
