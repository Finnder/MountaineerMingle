import {Navbar, Nav, Container} from "react-bootstrap"

const NavTop = () => {
    return (
            <Navbar className="fixed-top">
              <Container fluid>
                <Navbar.Brand href="#home">Mountaineer Mingle</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavTop
