import {Card} from "react-bootstrap"
import './InfoBlock.css'

const InfoBlock = (props: any) => {

    return( 
    <div className="InfoBlock">
        <a href={props.data.url} style={{textDecoration:"none",color: "black"}}>
        <Card className="text-center" border="dark">
        <Card.Img className="InfoImage" variant="top" src={props.data.image} />
        <Card.Body>
            <Card.Title>{props.data.name}</Card.Title>
            <hr/>
            <Card.Text>{props.data.location}</Card.Text>
            <Card.Text>{props.data.phone}</Card.Text>
            <Card.Text>{props.data.description}</Card.Text>
          </Card.Body>
      </Card>
          </a>
      </div>
    )
}

export default InfoBlock
