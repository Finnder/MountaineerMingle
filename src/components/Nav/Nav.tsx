import {Navbar, Nav, Container, Badge} from "react-bootstrap"

const NavTop = () => {

    const titleStyle = { 
        fontFamily: "Times New Roman, Times, Serif",
        fontSize: 50,
        color: "white",
        textDecoration: "none",
    }

    const navbarStyle = {
        backgroundColor: "#222",
        color: 'white',
        fontSize: "calc(20px + 0.5vw)",
    }

    return (
        <div className="justify-content-center">
        <a style={titleStyle} href="home">Mountaineer Mingle</a>
            <Navbar style={navbarStyle}>
              <Container fluid>
              <Nav style={navbarStyle}>
                  <Nav.Link href="bars"><Badge bg="warning" text="dark">Bars</Badge></Nav.Link>
                  <Nav.Link href="finedining"><Badge bg="warning" text="dark">Fine Dining</Badge></Nav.Link>
                  <Nav.Link href="foodplaces"><Badge bg="warning" text="dark">Food Places</Badge></Nav.Link>
                  <Nav.Link href="gyms"><Badge bg="warning" text="dark">Gyms</Badge></Nav.Link>
                  <Nav.Link href="hikes"><Badge bg="warning" text="dark">Hikes</Badge></Nav.Link>
                  <Nav.Link href="outdoor"><Badge bg="warning" text="dark">Outdoor</Badge></Nav.Link>
                  <Nav.Link href="restaurants"><Badge bg="warning" text="dark">Restaurants</Badge></Nav.Link>
               </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavTop
