import React from 'react'
import { Row, Col} from 'react-bootstrap'
import cafes from '../../data/cafes'
import InfoBlock from '../InfoBlock/InfoBlock'

class CafeInfo extends React.Component {

    render(){
        return(
        <div>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={cafes[0]} /></Col>
                    <Col sm><InfoBlock data={cafes[1]} /></Col>
                    <Col sm><InfoBlock data={cafes[2]} /></Col>
                    <Col sm><InfoBlock data={cafes[3]} /></Col>
                </Row>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={cafes[4]} /></Col>
                </Row>

                <br/>
                <br/>
                <br/> 
            </div>
        )
    }
}

export default CafeInfo
