import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const Main = ({el}) => {
  return (
    <div>
         <div>
             <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={el.image} />
                   <Card.Body>
                     <Card.Title>{el.name}</Card.Title>
                     <Card.Text>{el.Price} </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                 </Card>
         </div>
    </div>
  )
}

export default Main