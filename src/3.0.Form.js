import FormByName from './4.0.FormByName';
import FormByIngredient from './4.0.FormByIngredient';
import React from 'react';

function Form(props) {
    return (
        <React.Fragment>
            {props.byIngredient? 
                <FormByIngredient byIngredient={props.byIngredient} id={props.id} className={props.className} />
                : <FormByName byIngredient={props.byIngredient} id={props.id} className={props.className}/>
            }
        </React.Fragment>
    )
            
}



export default Form;