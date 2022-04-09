import React from 'react'
import { Stack } from 'react-bootstrap'
import cafes from '../../data/cafes'
import InfoBlock from '../InfoBlock/InfoBlock'

class CafeInfo extends React.Component {

    render(){
        return(
            <div className="justify-content-center">
                <Stack direction="horizontal">
                    <InfoBlock data={cafes[0]} />
                    <InfoBlock data={cafes[1]} />
                    <InfoBlock data={cafes[2]} />
                    <InfoBlock data={cafes[3]} />
                </Stack>
            
                <br/>

                <Stack direction="horizontal">
                    <InfoBlock data={cafes[4]} />
                </Stack>

                <br/>
                <br/>
                <br/> 
            </div>
        )
    }
}

export default CafeInfo
