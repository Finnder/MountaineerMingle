import React from 'react'

import OutdoorPlaces from '../../data/outdoor'
import InfoBlock from '../InfoBlock/InfoBlock'

class OutdoorInfo extends React.Component {

    render(){
        return OutdoorPlaces.map((info: any) => <InfoBlock data={info} />)  
    }
}

export default OutdoorInfo
