import React from 'react'

import FineDining from '../../data/finedining'
import InfoBlock from '../InfoBlock/InfoBlock'

class FineDiningInfo extends React.Component {

    render(){
        return FineDining.map((info: any) => <InfoBlock data={info} />)  
    }
}

export default FineDiningInfo
