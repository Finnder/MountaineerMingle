 import FineDining from '../../data/finedining'
import InfoBlock from '../InfoBlock/InfoBlock'

const FineDinings = () => {
    return FineDining.map((info: any) => <InfoBlock />)  
}

export default FineDinings
