import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import Spinner from 'react-bootstrap/Spinner';
import RecipeCard from "./5.3.RecipeCard";
import './3.0.FormByName.css';
import ToastNotification from "./5.2.ToastNotification";

const axios = require('axios');

export default function FormByName(props){
    const [alertList, editAlertList] = useState([]);
    const [recipe, editRecipe] = useState('');
    const [resultList, editResultList] = useState([]);
    const [loading, editLoading] = useState(false);

    const addAlert = (type, message) => {
        editAlertList([{ id: uuidv4(), type, message}, ...alertList]);
    } 

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

        if(!validateInput(recipe)) {
            addAlert('error', 'Input error');
            return;
        }

        toggleLoader(true);

        console.log(`Client: searching for ${recipe}`);

        const options = {
            method: 'GET',
            url: '/recipes-by-name',
            params: {
                q: recipe,
            }
          };
          
          axios.request(options)
          .then(response => {
            addResults(response.data);
        }).catch(error => {
            console.log('result is nil, nada');
            addAlert('error', 'INPUT ERROR!!!!!');

            toggleLoader(false);

            console.error(error);
          });
    }

    const validateInput = input => {
        let filteredInput = input.trim().replace(/[^a-zA-Z0-9\s]/g, '');

        if(filteredInput.length) return filteredInput;

        return false;
    }

    useEffect(() => {
        if(resultList.length) toggleLoader(false);
    }, [resultList.length])

    return loading ?
        <div className="spinner-container">
            <Spinner animation="border" role="status">
            
                <span className="visually-hidden">Loading...</span>

            </Spinner>
        </div>
        : resultList.length ? 
            <RecipeCard recipeList={resultList} clearResults={clearResults} btnAction='remove' />
            : (<div id={props.id} className={props.className}>
                <ToastNotification toastList={alertList} delay={2500} />

                <label htmlFor='name-input'>
                    <input type="text" name='name-input' placeholder='e.g. Carrot Cake' onChange={updateRecipe} />
                </label>
    
                <button onClick={searchForRecipe}>SEARCH</button>
            </div>)
}
