import Bars from '../../data/bars'
import InfoBlock from '../InfoBlock/InfoBlock'

const BarsInfo = () => {
    return Bars.map((info: any) => <InfoBlock />)  
}

export default BarsInfo
