import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Bars from '../../data/bars'
import InfoBlock from '../InfoBlock/InfoBlock'

class BarsInfo extends React.Component {

    render(){
        return(

            <div>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={Bars[0]} /></Col>
                    <Col sm><InfoBlock data={Bars[1]} /></Col>
                    <Col sm><InfoBlock data={Bars[2]} /></Col>
                    <Col sm><InfoBlock data={Bars[3]} /></Col>
                </Row>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={Bars[4]} /></Col>
                    <Col sm><InfoBlock data={Bars[5]} /></Col>
                </Row>

                <br/>
                <br/>
                <br/> 
            </div>
        )
    }
}

export default BarsInfo 
