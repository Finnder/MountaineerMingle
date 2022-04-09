import React from 'react'

import Hikes from '../../data/hikes'
import InfoBlock from '../InfoBlock/InfoBlock'

class HikesInfo extends React.Component {

    render(){
        return Hikes.map((info: any) => <InfoBlock data={info} />)  
    }
}

export default HikesInfo
