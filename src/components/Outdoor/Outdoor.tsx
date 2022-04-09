import React from 'react'

import OutdoorPlaces from '../../data/outdoor'
import InfoBlock from '../InfoBlock/InfoBlock'

import {Row, Col} from 'react-bootstrap'

class OutdoorInfo extends React.Component {

    render(){
        return(

            <div>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={OutdoorPlaces[0]} /></Col>
                    <Col sm><InfoBlock data={OutdoorPlaces[1]} /></Col>
                    <Col sm><InfoBlock data={OutdoorPlaces[2]} /></Col>
                    <Col sm><InfoBlock data={OutdoorPlaces[3]} /></Col>
                </Row>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={OutdoorPlaces[4]} /></Col>
                </Row>

                <br/>
                <br/>
                <br/> 
            </div>
            
        )
    }
}

export default OutdoorInfo
