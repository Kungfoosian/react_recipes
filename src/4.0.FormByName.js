import { useState } from "react";

const SERVER_URL = 'http://localhost:8000'
const axios = require('axios');

export default function FormByName(props){
    const [recipe, editRecipe] = useState('');

    const updateRecipe = event => {
        editRecipe(event.target.value);
        // console.log(recipe);
    }

    const searchRecipe = () => {
        console.log(`searching for ${recipe}`);

        const options = {
            method: 'GET',
            url: `${SERVER_URL}/recipes-by-name`,
            params: {
                q: recipe,
            }
          };
          
          axios.request(options)
          .then(response => {
            // res.json(response.data);
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
    }

    return (<div id={props.id} className={props.className}>
        {/* <Input placeholder='e.g. Beef Stroganoff' /> */}
        <label htmlFor='name-input'>
            <input type="text" name='name-input' placeholder='e.g. Carrot Cake' onChange={updateRecipe} />
        </label>

        <button onClick={searchRecipe}>SEARCH</button>
    </div>)
}
