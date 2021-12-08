import React from 'react';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Col, Row, Tab, Tabs, ListGroup, Button } from 'react-bootstrap';

function RecipeCard() {

    const singleRecipeData = useSelector((state) => state.singleRecipeReducer);
    const recipe = singleRecipeData[0]
    const health = recipe.healthLabels
    const ingredients = recipe.ingredientLines
    // const nutrition = recipe.digest
    // const dailyInfo = nutrition.sub

    // Detailed recipe card
    return (
        <div className="drink-container d-flex align-items-center justify-content-center mt-5">
            <Card border="primary" style={{ maxWidth: '60rem' }}>

                <Row className='g-0'>
                    <Col md='4'>
                        <Card.Img variant="bottom" src={recipe.image} alt="drink" />
                    </Col>
                    <Col md='8'>
                        <Card.Title>{recipe.label}</Card.Title>
                        <Card.Text>Cook Time: {recipe.totalTime} minutes</Card.Text>
                        <Card.Text>Servings: {recipe.yield}</Card.Text>
                        <Card.Text>Diet Type: {recipe.dietLabels}</Card.Text>
                        <Card.Text>Dish Type: {recipe.dishType}</Card.Text>
                        <Card.Text>Cuisine Type: {recipe.cuisineType}</Card.Text>
                        <Button href={recipe.url} target="_blank">Cooking Instructions</Button>
                    </Col>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="profile" title="Ingredients">
                            <ListGroup>
                                {ingredients && ingredients.map((ingredient, index) => {
                                    return <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>;
                                })}
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="home" title="Health Labels">
                            <ListGroup>
                                {health && health.map((healthy, index) => {
                                    return <ListGroup.Item key={index}>{healthy}</ListGroup.Item>;
                                })}
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="nutrition" title="Nutrition">
                            <ListGroup>
                                {/* {nutrition && nutrition.map((nutri, index) => {
                                                return <ListGroup.Item key={index}>{nutri}</ListGroup.Item>;
                                            })} */}
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="comments" title="Comments">
                            <Row>
                                <Col md="8">
                                    <textarea></textarea>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>

                </Row>

            </Card>
        </div>
    )
}

export default RecipeCard;