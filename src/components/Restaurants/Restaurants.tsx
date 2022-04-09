import React from 'react'

import Restaurants from '../../data/restaurants'
import InfoBlock from '../InfoBlock/InfoBlock'

import {Row, Col} from 'react-bootstrap'

class RestaurantsInfo extends React.Component {

    render(){
        return(
        <div>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={Restaurants[0]} /></Col>
                    <Col sm><InfoBlock data={Restaurants[1]} /></Col>
                    <Col sm><InfoBlock data={Restaurants[2]} /></Col>
                    <Col sm><InfoBlock data={Restaurants[3]} /></Col>
                </Row>
                <Row xs={1} md={4} lg={4}>
                    <Col sm><InfoBlock data={Restaurants[4]} /></Col>
                    <Col sm><InfoBlock data={Restaurants[5]} /></Col>
                </Row>

                <br/>
                <br/>
                <br/> 
            </div>
        )
    }
}

export default RestaurantsInfo
