import React from 'react'
import {Row, Col} from 'react-bootstrap'

import FineDining from '../../data/finedining'
import InfoBlock from '../InfoBlock/InfoBlock'

class FineDiningInfo extends React.Component {

    render(){
        return (

            <div>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={FineDining[0]} /></Col>
                    <Col sm><InfoBlock data={FineDining[1]} /></Col>
                    <Col sm><InfoBlock data={FineDining[2]} /></Col>
                    <Col sm><InfoBlock data={FineDining[3]} /></Col>
                </Row>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={FineDining[4]} /></Col>
                    <Col sm><InfoBlock data={FineDining[5]} /></Col>
                </Row>

                <br/>
                <br/>
                <br/> 
            </div>
        )
    }
}

export default FineDiningInfo
