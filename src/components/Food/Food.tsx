import React from 'react'
import { Row, Col } from 'react-bootstrap'
import FoodPlaces from '../../data/foodplaces'
import InfoBlock from '../InfoBlock/InfoBlock'

class FoodInfo extends React.Component {

    render(){
        return(
            <div>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={FoodPlaces[0]} /></Col>
                    <Col sm><InfoBlock data={FoodPlaces[1]} /></Col>
                    <Col sm><InfoBlock data={FoodPlaces[2]} /></Col>
                    <Col sm><InfoBlock data={FoodPlaces[3]} /></Col>
                </Row>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={FoodPlaces[4]} /></Col>
                    <Col sm><InfoBlock data={FoodPlaces[5]} /></Col>
                </Row>

                <br/>
                <br/>
                <br/> 
            </div>
        )
    }
}

export default FoodInfo 
