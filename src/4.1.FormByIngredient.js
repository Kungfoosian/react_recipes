import React, {useState} from 'react';
import Input from './5.1.Input';
import ActionButton from './5.0.ActionBtn';
import { v4 as uuidv4 } from 'uuid';
import './4.1.FormByIngredient.css';
import ToastNotification from './5.2.ToastNotification';

function FormByIngredient(props){
    const [ ingredientList, updateList ] = useState([
        { id: uuidv4(),
          name:'',
        }]);

    const addIngredient = () => {
        // if(ingredientList.length === 4) return <PopupMessage />;

        let newIngredient = {
            id: uuidv4(),
            name: ''
        }

        updateList([...ingredientList, newIngredient]);
    }

    const removeIngredient = id => {
        updateList(ingredientList.filter(ingredient => ingredient.id !== id));
    }

    const updateIngredient = event => {
        let index = event.target.id;
        let newName = event.target.value;

        let currentList = ingredientList;

        currentList[index].name = newName;
        updateList(currentList);
    }

    // TODO
    const searchRecipe = event => {
        console.log(ingredientList);
    }

    return (
        <div className={props.className} id={props.id}>
            { ingredientList.length >= 4 ? <ToastNotification type='warning' message='Only 4 ingredients' /> : '' }
            

            {ingredientList.map((ingredient, index) => {
                return (
                    <React.Fragment key={`fragment-${index}`}>
                    
                    <div className='ingredient-container'>
                        <Input key={ingredient.id} id={index} placeholder={ingredient.name} handleChange={updateIngredient}/>
                        { ingredientList.length > 1 ?
                            <ActionButton type='remove' className='remove' onClick={ () => removeIngredient(ingredient.id) }/> 
                            : ''
                        }
                    </div>
                    </React.Fragment>
                )
            })}

            <div className='button-container'>
                <ActionButton type='add' className='add' onClick={addIngredient} disabled={ingredientList.length === 4 ? true : false} />
                <ActionButton type='search' className='search' onClick={searchRecipe} />
            </div>
        </div>
    )
}

export default FormByIngredient;