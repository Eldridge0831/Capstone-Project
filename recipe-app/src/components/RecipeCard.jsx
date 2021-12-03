import React from 'react';
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Col, Row } from 'react-bootstrap';

function RecipeCard() {

    const singleRecipeData = useSelector((state) => state);
    // console.log(singleDrinkData);

    return (
        <div className="drink-container d-flex align-items-center justify-content-center mt-5">
            <Card border="primary" style={{ maxWidth: '60rem'}}>
                {
                    singleRecipeData && singleRecipeData.map((recipe, index) => ( 
                        <>
                        <Row className='g-0'>
                        <Col md='4'>            
                        <Card.Img variant="bottom" src={recipe.image} alt="drink" />
                        </Col>
                        <Col md='8'>
                        <Card.Body>
                            <Card.Title>{recipe.label}</Card.Title>
                            <Card.Text>{recipe.ingredientLines}</Card.Text>
                            {/* <Card.Text>{recipe.strGlass}</Card.Text>
                            <Card.Text>{recipe.strInstructions}</Card.Text> */}
                        </Card.Body>
                        </Col>
                        </Row>
                        </>
                    ))
                }
            </Card>
        </div>
    )
}

export default RecipeCard;