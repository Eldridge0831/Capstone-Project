import React, { useState } from 'react';
// import axios from 'axios';
import { Button, Form } from 'react-bootstrap';

function NutritionData(props) {
    const [searchValue, setSearchValue] = useState("")

    

    function fetchNutrition(event) {

        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(request.responseText);
            }
        };
        request.open("GET", `https://api.edamam.com/api/food-database/v2/parser?app_id=95c34110&app_key=3a66e6e0892f21920f12d6787b36cdcd&ingr=${searchValue}&nutrition-type=cooking`);
        request.send();

    }

    const searchRequest = (event) => {
        setSearchValue(event.target.value)
        console.log(searchValue)
    }

    return (
        <div>
            <h1>Help</h1>
            <input value={searchValue} onChange={searchRequest} type="text" placeholder="Your Item" required />
            <Button type="submit" onClick={fetchNutrition}>Search</Button>
        </div>
    )

}

export default NutritionData;