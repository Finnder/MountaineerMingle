import './Nav.css'

import Boone  from '../../images/BGS/boone.jpeg'

import {Navbar, Nav, Container, Badge} from "react-bootstrap"

const NavTop = () => {

    const titleStyle = { 
        fontFamily: "title",
        fontSize: "calc(18px + 2vw)",
        color: "white",
        textDecoration: "none",
    }

    const navbarStyle = {
        backgroundColor: "#222",
        fontSize: "calc(15px + 1vw)",
    }

    return (
        <div className="justify-content-center mx-auto">
            <a style={titleStyle} href="/">⛰  Mountaineer Mingle ⛰</a>
        <Navbar style={navbarStyle}>
              <Nav className="mx-auto">
                  <Nav.Link className="tabbtn" href="bars"><Badge bg="warning" text="dark">Bars</Badge></Nav.Link>
                  <Nav.Link className="tabbtn" href="finedining"><Badge  bg="warning" text="dark">Fine Dining</Badge></Nav.Link>
                  <Nav.Link className="tabbtn" href="fastfood"><Badge  bg="warning" text="dark">Quick Food</Badge></Nav.Link>
                  <Nav.Link className="tabbtn" href="hikes"><Badge bg="warning" text="dark">Hikes</Badge></Nav.Link>
                  <Nav.Link className="tabbtn" href="outdoor"><Badge bg="warning" text="dark">Activities</Badge></Nav.Link>
                  <Nav.Link className="tabbtn" href="restaurants"><Badge bg="warning" text="dark">Restaurants</Badge></Nav.Link>
                  <Nav.Link className="tabbtn" href="cafes"><Badge bg="warning" text="dark">Cafes</Badge></Nav.Link>
               </Nav>
        </Navbar>
    </div>
   )
}

export default NavTop
