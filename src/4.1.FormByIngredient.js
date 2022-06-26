import React, {useEffect, useState} from 'react';
import Input from './5.1.Input';
import ActionButton from './5.0.ActionBtn';
import { v4 as uuidv4 } from 'uuid';
import './4.1.FormByIngredient.css';
import ToastNotification from './5.2.ToastNotification';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import RecipeCard from './5.3.RecipeCard';


function FormByIngredient(props){
    const [loading, setLoading] = useState(false);

    const [ recipeResults, editRecipeResults ] = useState([]);

    const addResults = list => {
        console.log(list);
        editRecipeResults(list);
    }

    const clearResults = () => editRecipeResults([]);

    const [ alertList, updateAlertList ] = useState([]);

    const addAlert = (type, message) => {
        updateAlertList([{ id: uuidv4(), type, message}, ...alertList]);
    } 

    const resetAlerts = () => updateAlertList([]) ;
    
    const [ ingredientList, updateIngredientList ] = useState([
        { 
            id: uuidv4(),
            name:'',
        }
    ]);
        
    const addIngredient = () => { 
        updateIngredientList([...ingredientList, { id: uuidv4(), name: '' }]);
    };
        
    const removeIngredient = id => { 
        updateIngredientList(ingredientList.filter(ingredient => ingredient.id !== id)) 
    }

    const updateIngredientName = event => {
        let id = event.target.id;

        let newValue = event.target.value;

        let currentList = ingredientList;

        currentList[id].name = newValue;

        updateIngredientList(currentList);
    }

    const searchRecipe = () => {
        setLoading(true);

        let filteredList = ingredientList.filter(ingredient =>  ingredient.name !== '');

        let ingredients = filteredList.map(ingredient => ingredient.name).toString();

        const OPTIONS = {
            method: 'GET',
            url: '/multi-ingredient-recipes',
            params: {
                i: ingredients,
            }
        } ;

        axios.request(OPTIONS)
        .then(response => addResults(response.data.meals))
        .catch(err => console.error(err))
    }

    useEffect(() => { if(alertList.length > 0 && ingredientList.length < 4)  resetAlerts() } , [ingredientList, alertList]);

    useEffect(() => {
        if(recipeResults.length) setLoading(false);
    }, [recipeResults])

    return (
        loading? 
        <div className="spinner-container">
            <Spinner animation="border" role="status">
            
                <span className="visually-hidden">Loading...</span>

            </Spinner>
        </div>
        : recipeResults.length?
            <RecipeCard recipeList={recipeResults} clearResults={clearResults} btnAction='remove' />
            :   <div className={props.className} id={props.id}>
                    <ToastNotification toastList={alertList} delay={2500} />

                    <div className='ingredient-container'>
                        {ingredientList.map((ingredient, index) => {
                            return (
                                <div key={index} className='input-container'>
                                    <Input key={ingredient.id} id={index} placeholder={ingredient.name} handleChange={updateIngredientName}/>
                                    { ingredientList.length > 1 ?
                                        <ActionButton type='remove' className='remove' onClick={ () => removeIngredient(ingredient.id) }/> 
                                        : ''
                                    }
                                </div>
                            )
                        })}
                    </div>

                    <div className='button-container'>
                        <ActionButton type='add' className='add' onClick={() => {                   
                            ingredientList.length >= 4 ? 
                                addAlert('warning', '4 ingredients plz')
                                : addIngredient();
                        }} />
                        <ActionButton type='search' className='search' onClick={searchRecipe} />
                    </div>
                </div>
        
    )
}

export default FormByIngredient;