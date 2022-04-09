import {Card} from "react-bootstrap"

const InfoBlock = (props: any) => {

    const infostyle = {
        width: "calc(90% + 1vw)",
        padding: 2
    }

    return( 
    <div>
         <Card style={infostyle} border="dark">
          <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Text>{props.data.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default InfoBlock
