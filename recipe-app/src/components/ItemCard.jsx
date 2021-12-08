import React from 'react';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import NutritionCard from './NutritionCard';
import axios from 'axios';


function ItemCard() {

    const singleItemData = useSelector((state) => state.singleItemReducer);
    console.log(singleItemData);


    // const alternateIngredient = (event) => {
    //     event.preventDefault()

    //     setAltIngredient (item.label)

    //     return axios.get ()



    // }

    return (
        <div className="-container d-flex align-items-center justify-content-center mt-5">
            <Card border="primary" style={{ maxWidth: '60rem' }}>
                {
                    singleItemData && singleItemData.map((item, index) => (
                        <>
                            <Row className='g-0'>
                                <Col md='4'>
                                    <Card.Img variant="bottom" src={item.image} alt="drink" />
                                </Col>
                                <Col md='8'>
                                    <Card.Body>
                                        <Card.Title>{item.label}</Card.Title>
                                        {/* <Card.Text>{item.nutrients}</Card.Text> */}
                                        {/* <Card.Text>{recipe.strGlass}</Card.Text>
                                        <Card.Text>{recipe.strInstructions}</Card.Text> */}
                                    </Card.Body>
                                    {/* <Container>
                                        <Row>
                                            <Col>
                                                <div>
                                                    <Button onClick={(event) => alternateIngredient(event)}>

                                                    
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container> */}
                                </Col>
                            </Row>
                            {/* <Row>
                                {alternateOptions && alternateOptions.map((item, index) => {
                                    return (
                                        <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}
                                            className="mb-6">
                                            <NutritionCard index={index} item={item.food} />
                                        </Col>
                                    )
                                })}
                            </Row> */}
                        </>
                    ))
                }
            </Card>
        </div>
    )
}

export default ItemCard;