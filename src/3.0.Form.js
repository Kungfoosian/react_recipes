import FormByName from './4.0.FormByName';
import FormByIngredient from './4.0.FormByIngredient';
import React from 'react';

function Form(props) {
    return (
        <React.Fragment>
            <div>
                <button>By Name</button>
                <button>By Ingredient</button>
            </div>

            {props.byIngredient? 
                <FormByIngredient byIngredient={props.byIngredient} className={props.className} />
                : <FormByName byIngredient={props.byIngredient} className={props.className}/>
            }
        </React.Fragment>
    )
            
}



export default Form;