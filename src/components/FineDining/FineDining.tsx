import React from 'react'
import {Stack} from 'react-bootstrap'

import FineDining from '../../data/finedining'
import InfoBlock from '../InfoBlock/InfoBlock'

class FineDiningInfo extends React.Component {

    render(){
        return (
            <>
                <Stack direction="horizontal">
                    <InfoBlock data={FineDining[0]} />
                    <InfoBlock data={FineDining[1]} />
                    <InfoBlock data={FineDining[2]} />
                    <InfoBlock data={FineDining[3]} />
                </Stack>
            
                <br/>

                <Stack direction="horizontal">
                    <InfoBlock data={FineDining[4]} />
                    <InfoBlock data={FineDining[5]} />
                </Stack>

                <br/>
                <br/>
                <br/> 
            </>
        )
    }
}

export default FineDiningInfo
