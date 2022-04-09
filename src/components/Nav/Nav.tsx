import {Navbar, Nav, Container} from "react-bootstrap"

const NavTop = () => {
    return (
        <div className="">
        <br/>
        <h1>Mountaineer Mingle</h1>
            <Navbar>
              <Container fluid>
              <Nav className="justify-content-center">
                  <Nav.Item><Nav.Link href="#home">Bars</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="#home">Bars</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="#home">Bars</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="#home">Bars</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="#home">Bars</Nav.Link></Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </div>
    )
}

export default NavTop
