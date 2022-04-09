import {Navbar, Container} from "react-bootstrap"

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

const NavBottom = () => {

    return(

        <div className="justify-content-center">
            <Navbar style={navbarStyle} fixed="bottom">
              <Container fluid>
                  <h6>Made with 💛 by Finn McGuire & Anders Evans</h6> 
              </Container>
        </Navbar>

    </div>
    )
}

export default NavBottom
