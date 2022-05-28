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

    const searchRecipe = event => {
        console.log(ingredientList);
    }

    return (
        <div className={props.className} id={props.id}>
            {ingredientList.map((ingredient, index) => {
                return (
                    <React.Fragment key={`fragment-${index}`}>
                        {/* <Input key={ingredient.id} id={index} name={ingredient.name} handleChange={updateIngredient}/> */}

                    { ingredientList.length > 1 ? 
                        <div>
                            <Input key={ingredient.id} id={index} name={ingredient.name} handleChange={updateIngredient}/>
                            <ActionButton type='remove' onClick={ () => removeIngredient(ingredient.id) }/> 
                        </div>
                        : <Input key={ingredient.id} id={index} name={ingredient.name} handleChange={updateIngredient}/>
                    }

                    {
                        index === ingredientList.length - 1 ?
                            <ActionButton type='add' onClick={addIngredient} />
                            : ''
                    }
                    </React.Fragment>
                )
            })}

            <div>
                <ActionButton type='search' onClick={searchRecipe} />
            </div>
        </div>
    )
}

export default FormByIngredient;