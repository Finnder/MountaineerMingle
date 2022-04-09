import React from 'react'

import Bars from '../../data/bars'
import InfoBlock from '../InfoBlock/InfoBlock'

class BarsInfo extends React.Component {

    render(){
        return Bars.map((info: any) => <InfoBlock data={info} />)  
    }
}

export default BarsInfo 
