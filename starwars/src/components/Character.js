// Write your Character component here

import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    Col
} from "reactstrap";


const Characters = props => {
    // console.log(props.name)
    return(
     <Col xs="6" md="4" xl="3">
        <Card>
         <CardHeader className= "name">{props.name}</CardHeader>
         <CardBody className = "card">
            <img src= {props.image} alt = "Image of Character"/>
            <CardText>Origin: {props.origin.name}</CardText>
            <CardText>Species: {props.species}</CardText>
            <CardText>Gender: {props.gender}</CardText>
            <CardText>Status: {props.status}</CardText>
         </CardBody>
        </Card>
      </Col>
    )
}

// status
export default Characters
