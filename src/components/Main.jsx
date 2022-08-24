import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux";
import { add } from '../redux/actions';
const Main = ({el}) => {
  const dispatch =useDispatch()
  return (
    <div>
         <div>
             <Card style={{ width: '18rem' }}>
                   <Card.Img variant="top" src={el.image} />
                   <Card.Body>
                     <Card.Title>{el.name}</Card.Title>
                     <Card.Text>{el.Price} </Card.Text>
                     <Button onClick={()=>dispatch(add(el))} variant="primary">Add To Cart</Button>
                   </Card.Body>
                 </Card>
         </div>
         
    </div>
  )
}

export default Main