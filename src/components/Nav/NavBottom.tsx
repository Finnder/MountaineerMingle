import {Navbar, Container, Button, Modal, Badge} from "react-bootstrap"
import { useState } from "react"
import { GoMarkGithub } from "react-icons/go"

const navbarStyle = {
    backgroundColor: "#222",
    color: 'white',
    fontSize: "calc(20px + 0.5vw)",
}

const NavBottom = () => {

    return(

        <div className="justify-content-center">
            <Navbar style={navbarStyle} fixed="bottom">
                <Container fluid>
                    <div className="left-side">
                      <h6>Made with 💛 by Finn McGuire & Anders Evans</h6> 
                    </div>

                <PopUpModal/> 
              </Container>
        </Navbar>


    </div>
    )
}

const PopUpModal = () => {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<>
    <div className="fixed-end">
        <Button variant="warning" onClick={handleShow}>More Info On Site Development</Button>
    </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Website Information</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{fontSize:20}}>
            <Badge bg="dark"><GoMarkGithub/>Github</Badge> <a href="https://github.com/Finnder/MountaineerMingle" style={{fontSize:15}}>https://github.com/Finnder/MountaineerMingle</a>
            <br/>
            <br/>
            This project is an open-source project feel free to contribute
        </Modal.Body>
      </Modal>
  </>

  )
}

export default NavBottom
