import React, {useEffect, useState} from 'react';
import Input from './5.1.Input';
import ActionButton from './5.0.ActionBtn';
import { v4 as uuidv4 } from 'uuid';
import './4.1.FormByIngredient.css';
import ToastNotification from './5.2.ToastNotification';

function FormByIngredient(props){
    const [ alertList, updateAlertList ] = useState([]);

    const addAlert = (type, message) => {
        console.log('adding');
        updateAlertList([...alertList, { id: uuidv4(), type, message}]);
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
        
    const removeIngredient = id => { updateIngredientList(ingredientList.filter(ingredient => ingredient.id !== id)) }

    const updateIngredientName = event => {
        let id = event.target.id;

        let newValue = event.target.value;

        let currentList = ingredientList;

        currentList[id].name = newValue;

        updateIngredientList(currentList);
    }

    const searchRecipe = event => {
        console.log(ingredientList);
    }

    // Reset alerts everytime there are <= 4 ingredients
    useEffect(() => { if(alertList.length > 0 && ingredientList.length < 4)  resetAlerts() } , [ingredientList]);

    return (
        <div className={props.className} id={props.id}>
            <ToastNotification toastList={alertList} delay={2500} />

            {ingredientList.map((ingredient, index) => {
                return (
                    <React.Fragment key={`fragment-${index}`}>
                    
                    <div className='ingredient-container'>
                        <Input key={ingredient.id} id={index} placeholder={ingredient.name} handleChange={updateIngredientName}/>
                        { ingredientList.length > 1 ?
                            <ActionButton type='remove' className='remove' onClick={ () => removeIngredient(ingredient.id) }/> 
                            : ''
                        }
                    </div>
                    </React.Fragment>
                )
            })}

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