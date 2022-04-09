import {Navbar, Nav, Container} from "react-bootstrap"

const NavTop = () => {
    return (
        <div className="">
        <br/>
        <h1>Mountaineer Mingle</h1>
            <Navbar>
              <Container fluid>
              <Nav>
                 <Nav.Link href="#home">Bars</Nav.Link>
                 <Nav.Link href="#home">Fine Dining</Nav.Link>
                 <Nav.Link href="#home">Food Places</Nav.Link>
                 <Nav.Link href="#home">Gyms</Nav.Link>
                 <Nav.Link href="#home">Hikes</Nav.Link>
                 <Nav.Link href="#home">Outdoor</Nav.Link>
                 <Nav.Link href="#home">Restaurants</Nav.Link>
               </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavTop
