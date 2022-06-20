import { useEffect, useState } from "react";
import { Spinner } from 'react-bootstrap';
import RecipeCard from "./5.3.RecipeCard";

const SERVER_URL = 'http://localhost:8000'
const axios = require('axios');

export default function FormByName(props){
    const [recipe, editRecipe] = useState('');
    const [resultList, editResultList] = useState([]);
    const [loading, editLoading] = useState(false);

    const toggleLoader = newValue => editLoading(newValue);

    const addResults = array => {
        editResultList([...array]);
    }

    const clearResults = () => editResultList([]);
    
    const updateRecipe = event => {
        editRecipe(event.target.value);
    }

    const searchForRecipe = () => {
        if(recipe === '') return;

        toggleLoader(true);

        console.log(`Client: searching for ${recipe}`);

        const options = {
            method: 'GET',
            url: `${SERVER_URL}/recipes-by-name`,
            params: {
                q: recipe,
            }
          };
          
          axios.request(options)
          .then(response => {
            // console.log(response.data);
            addResults(response.data);

          }).catch(function (error) {
            console.error(error);
          });
    }

    const visitPage = pageId => {

    }

    useEffect(() => {
        if(resultList.length) toggleLoader(false);
    }, [resultList.length])

    // return resultList.length ? 
    //     <RecipeCard list={resultList} clearResults={clearResults} />
    //     : (<div id={props.id} className={props.className}>
    //         <label htmlFor='name-input'>
    //             <input type="text" name='name-input' placeholder='e.g. Carrot Cake' onChange={updateRecipe} />
    //         </label>
    
    //         <button onClick={searchForRecipe}>SEARCH</button>
    //     </div>)

    return loading ?
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        : resultList.length ? 
            <RecipeCard list={resultList} clearResults={clearResults} />
            : (<div id={props.id} className={props.className}>
                <label htmlFor='name-input'>
                    <input type="text" name='name-input' placeholder='e.g. Carrot Cake' onChange={updateRecipe} />
                </label>
    
                <button onClick={searchForRecipe}>SEARCH</button>
            </div>)
}
