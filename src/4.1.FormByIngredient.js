import React, {useState} from 'react';
import Input from './5.1.Input';
import ActionButton from './5.0.ActionBtn';
import { v4 as uuidv4 } from 'uuid';

function FormByIngredient(props){
    const [ ingredientList, updateList ] = useState([
        { id: uuidv4(),
          name:'',
        }]);

    const addIngredient = () => {
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
            {ingredientList.map((ingredient, index) => {
                return (
                    <React.Fragment key={`fragment-${index}`}>

                    { ingredientList.length > 1 ? 
                        <div className='ingredient-container'>
                            <Input key={ingredient.id} id={index} placeholder={ingredient.name} handleChange={updateIngredient}/>
                            <ActionButton type='remove' className='remove' onClick={ () => removeIngredient(ingredient.id) }/> 
                        </div>
                        : <Input key={ingredient.id} id={index} placeholder={ingredient.name} handleChange={updateIngredient}/>
                    }
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