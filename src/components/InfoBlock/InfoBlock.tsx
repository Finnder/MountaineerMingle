import {Card} from "react-bootstrap"
import './InfoBlock.css'

const InfoBlock = (props: any) => {

    return( 
    <div className="InfoBlock">
        <Card className="text-center" border="dark">
        <Card.Img className="InfoImage" variant="top" src={props.data.image} />
        <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <hr/>
            <Card.Text>{props.data.location}</Card.Text>
            <Card.Text>{props.data.phone}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
}

export default InfoBlock
