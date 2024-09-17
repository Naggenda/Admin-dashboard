import Card from 'react-bootstrap/Card';

const CardForm = (props) => {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
        <Card.Text>
          {props.text}
        </Card.Text>
        <hr />
        <Card.Text href="#">{props.footer}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardForm;