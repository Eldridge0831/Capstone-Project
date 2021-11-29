import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';


function RecipeSearch(props) {

    const [recipeData, setRecipeData] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [inputHealth, setInputHealth] = useState("")
    const [inputExclude, setInputExclude] = useState("")
    const [inputTime, setInputTime] = useState("")
    const [inputCuisine, setInputCuisine] = useState("")
    const [inputDiet, setInputDiet] = useState("")
    const navigate = useNavigate();
    let exclusions = ""
    let time = ""


    // API call
    function fetchRecipeList (event) {
        event.preventDefault()

        // Attaching labels to input variables before API Call insertion
        if (inputExclude !== "") {
            exclusions = "excluded=" + inputExclude
            console.log(exclusions);
        };
        
        if (inputTime !== "") {
            time = ("time=" + inputTime);
            console.log(time)
        };

        const url = (`https://api.edamam.com/api/recipes/v2?type=public&q=${inputValue}&app_id=4cb19fd5&app_key=d2763a8995b7eef7f64d6158309567ca&${inputDiet}&${inputHealth}&${exclusions}&${time}&${inputCuisine}`)
        console.log(url)
        return axios.get(url)
            .then(recipes => recipes.data)
            .then(data => {
                console.log(data);
                setInputValue("")
                setInputHealth("")
                setInputExclude("")
                setInputTime("")
                setInputCuisine("")
                setInputDiet("")
                
                if (data['hits'] === []) {
                    setRecipeData([])
                    navigate.push('/404') // redirect for bad request
                } else
                    setRecipeData(data['hits'])
            });
    }


    // Section to handle search input request, changing assigned local states
    const handleRequest = (event) => {
        console.log("request made")
        setInputValue(event.target.value)
    }

    const handleRequest2 = (event) => {
        setInputHealth("health=" + event.target.value)
    }

    const handleRequest3 = (event) => {
        setInputExclude(event.target.value)
        console.log(inputExclude)
    }

    const handleRequest4 = (event) => {
        setInputTime(event.target.value)
        console.log(inputTime)
    }

    const handleRequest5 = (event) => {
        setInputCuisine("cuisineType=" + event.target.value)
        console.log(inputCuisine)
    }

    const handleRequest6 = (event) => {
        setInputDiet("diet=" + event.target.value)
        console.log(inputDiet)
    }

    return (
        <div>
            <h2>Healthy Recipe Finder</h2>
            <Form onSubmit={fetchRecipeList}>
                <Form.Group>
                    <Form.Label>Primary Search</Form.Label>
                    <Form.Control value={inputValue} onChange={handleRequest} type="text" placeholder="What are you looking for?" required />
                </Form.Group>
                <Form.Select defaultValue="" onChange={handleRequest6} aria-label="default select example">
                    <option value="">Diet Options</option>
                    <option value="balanced">Balanced</option>
                    <option value="high-fiber">High-Fiber</option>
                    <option value="high-protein">High-Protein</option>
                    <option value="low-carb">Low-Carb</option>
                    <option value="low-fat">Low-Fat</option>
                    <option value="low-sodium">Low-Sodium</option>
                </Form.Select>
                <Form.Select defaultValue="" onChange={handleRequest2} aria-label="default select example">
                    <option value="">Advanced Diet Options</option>
                    <option value="crustacean-free">Crustacean-Free</option>
                    <option value="dairy-free">Dairy-Free</option>
                    <option value="DASH">DASH</option>
                    <option value="egg-free">Egg-Free</option>
                    <option value="fish-free">Fish-Free</option>
                    <option value="fodmap-free">Fodmap-Free</option>
                    <option value="gluten-free">Gluten-Free</option>
                    <option value="immuno-supportive">Immuno-Supportive</option>
                    <option value="keto-friendly">Keto-Friendly</option>
                    <option value="kidney-friendly">Kidney-Friendly</option>
                    <option value="kosher">Kosher</option>
                    <option value="low-potassium">Low-Potassium</option>
                    <option value="low-sugar">low-sugar</option>
                    <option value="lupine-free">Lupine-Free</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="mollusk-free">Mollusk-Free</option>
                    <option value="paleo">Paleo</option>
                    <option value="peanut-free">Peanut-Free</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="pork-free">Pork-Free</option>
                    <option value="red-meat-free">Red-Meat-Free</option>
                    <option value="sesame-free">Sesame-Free</option>
                    <option value="shellfish-free">Shellfish-Free</option>
                    <option value="soy-free">Soy-Free</option>
                    <option value="sugar-conscious">Sugar-Conscious</option>
                    <option value="sulfite-free">Sulfite-Free</option>
                    <option value="tree-nut-free">Tree-Nut-Free</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="wheat-free">Wheat-Free</option>
                </Form.Select>
                <Form.Select defaultValue="" onChange={handleRequest5} aria-label="default select example">
                    <option value="">Cuisine Type</option>
                    <option value="American">American</option>
                    <option value="Asian">Asian</option>
                    <option value="British">British</option>
                    <option value="Caribbean">Caribbean</option>
                    <option value="Central Europe">Central Europe</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Eastern Europe">Eastern Europe</option>
                    <option value="French">French</option>
                    <option value="Indian">Indian</option>
                    <option value="Italian">Italian</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Kosher">Kosher</option>
                    <option value="Mediterranean">Mediterranean</option>
                    <option value="Nordic">Nordic</option>
                    <option value="South American">South American</option>
                    <option value="South East Asian">South East Asian</option>
                </Form.Select>
                <Form.Select>
                    <option value="">Meal Type</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snack">Snack</option>
                </Form.Select>
                <Form.Group>
                    <Form.Label>Ingredient to Excluse</Form.Label>
                    <Form.Control value={inputExclude} onChange={handleRequest3} type="text" placeholder="Exclude" />
                    <Form.Label>Maximum Time for Recipe</Form.Label>
                    <Form.Control value={inputTime} onChange={handleRequest4} type="number" placeholder="minutes" />
                </Form.Group>
                <Button type="submit">Search</Button>
            </Form>

            <div className = "recipe-container">
                <table className = "table border border-dark align-middle">
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        recipeData.map((recipe, index) => (
                            <tr>
                                {/* <Button className="btn btn-dark" onClick={() => handleDrinkSelection(drink)}>See Details</Button> */}
                                <td>{recipe.recipe.label}</td>
                                <td><img src = {recipe.recipe.image} alt = "Cocktail" width = "50%"/></td>
                                <td>{recipe.recipe._links}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default RecipeSearch;