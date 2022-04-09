import React from 'react'

import { Stack, Row, Col } from 'react-bootstrap'

import GrandfatherMountain from '../../images/BGS/background_hikes.jpeg'

import Hikes from '../../data/hikes'
import InfoBlock from '../InfoBlock/InfoBlock'

class HikesInfo extends React.Component {

    render(){
        return(
            <div>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={Hikes[0]} /></Col>
                    <Col sm><InfoBlock data={Hikes[1]} /></Col>
                    <Col sm><InfoBlock data={Hikes[2]} /></Col>
                    <Col sm><InfoBlock data={Hikes[3]} /></Col>
                </Row>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={Hikes[4]} /></Col>
                    <Col sm><InfoBlock data={Hikes[5]} /></Col>
                </Row>

                <br/>
                <br/>
                <br/> 
            </div>
    )
    }
}

export default HikesInfo
