import React from 'react'
import { Stack } from 'react-bootstrap'
import Bars from '../../data/bars'
import InfoBlock from '../InfoBlock/InfoBlock'

class BarsInfo extends React.Component {

    render(){
        return(
            <div className="BarsInfo">
                <Stack direction="horizontal">
                    <InfoBlock data={Bars[0]} />
                    <InfoBlock data={Bars[1]} />
                    <InfoBlock data={Bars[2]} />
                    <InfoBlock data={Bars[3]} />
                </Stack>
            
                <br/>

                <Stack direction="horizontal">
                    <InfoBlock data={Bars[4]} />
                    <InfoBlock data={Bars[5]} />
                    <InfoBlock data={Bars[6]} />
                </Stack>

                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default BarsInfo 
