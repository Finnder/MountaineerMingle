import {Card} from "react-bootstrap"

const InfoBlock = (props: any) => {

    const infostyle = {
        width: "calc(90% + 1vw)",
        padding: 2
    }

    return( 
     <>
        <Card style={infostyle} border="dark">
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
          </Card>
      </>
    )
}

export default InfoBlock
