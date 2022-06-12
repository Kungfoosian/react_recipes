import React, {useState} from 'react';
import Input from './5.1.Input';
import ActionButton from './5.0.ActionBtn';
import { v4 as uuidv4 } from 'uuid';
import './4.1.FormByIngredient.css';
import ToastNotification from './5.2.ToastNotification';
import {handleAdd, handleRemove, handleUpdate} from './stateHandler'

function FormByIngredient(props){
    const [ messageList, updateMessageList ] = useState([]);
    
    const [ ingredientList, updateIngredientList ] = useState([
        { id: uuidv4(),
            name:'',
        }]);
        
    // TODO, move to stateHandler.js
    const searchRecipe = event => {
        console.log(ingredientList);
    }

    return (
        <div className={props.className} id={props.id}>
            { messageList.length >= 1 ? <ToastNotification list={messageList} handleRemove={handleRemove} updateFunction={updateMessageList} /> : '' }

            {ingredientList.map((ingredient, index) => {
                return (
                    <React.Fragment key={`fragment-${index}`}>
                    
                    <div className='ingredient-container'>
                        <Input key={ingredient.id} id={index} placeholder={ingredient.name} handleChange={event => handleUpdate(event, ingredientList, updateIngredientList)}/>
                        { ingredientList.length > 1 ?
                            <ActionButton type='remove' className='remove' onClick={ () => handleRemove(ingredient.id, ingredientList, updateIngredientList) }/> 
                            : ''
                        }
                    </div>
                    </React.Fragment>
                )
            })}

            <div className='button-container'>
                <ActionButton type='add' className='add' onClick={() => {
                    if (ingredientList.length >= 4) {
                        handleAdd(
                            {
                                id: uuidv4(),
                                type: 'warning',
                                content: '4 ingredients only'
                            },
                            messageList,
                            updateMessageList
                        )

                        return;
                    };

                    handleAdd(
                        {
                            id: uuidv4(),
                            name: ''
                        },
                        ingredientList,
                        updateIngredientList
                    )
                }} />
                <ActionButton type='search' className='search' onClick={searchRecipe} />
            </div>
        </div>
    )
}

export default FormByIngredient;