import React, {useState} from 'react';
import Input from './Input';
import ActionButton from './ActionBtn';

// class FormByIngredient extends React.Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             ingredients: [undefined],
//         }
//     }

//     render() {
//         let ingredientList = this.state.ingredients;
//         console.log('\n\nIngredients rendering: ' + ingredientList.length);

//         return (
//             <div>
//                 {ingredientList.map((ingredient, index) => {
//                     return (
//                         <div key={`ingredient-${index}`} id={`ingredient-${index}`}>
//                             <Input key={index} id={index}/>
//                             { ingredientList.indexOf(ingredient) > 0 ? 
//                                 <ActionButton type='remove' onClick={ () => this.removeIngredient(index) }/> 
//                                 : null
//                             }
//                         </div>
//                     )
//                 })}

//                 <div>
//                     <ActionButton type='add' onClick={ () => this.addIngredient() } />
//                     <ActionButton type='search' onClick={ () => this.searchRecipe() } />
//                 </div>
//             </div>
//         )
//     }

//     addIngredient(){
//         let ingredient = { name: 'placeholder' };

//         let newList = this.state.ingredients;
//         newList.push(ingredient);

//         this.setState({
//             ingredients: newList
//         })
//         console.log(this.state);
//     }

//     removeIngredient(id){
//         console.log('removing ' + id);
//         let newList = this.state.ingredients;
        
//         this.setState({
//             ingredients: newList.splice(id, 1)
//         })
//         console.log(this.state.ingredients);
//     }    

//     searchRecipe(){
//         console.log('Searching!!');
//     }
// }

function FormByIngredient(props){
    const [ ingredientList, updateIngredientList ] = useState(['banana']);

    const addIngredient = () => {
        updateIngredientList([...ingredientList, 'tomato']);
    }

    const removeIngredient = (index) => {
        // let currentList = Array.from(ingredientList);
        let currentList = [...ingredientList];
        
        updateIngredientList(currentList.splice(1, 1));
    }

    return (
        <div>
            {ingredientList.map((ingredient, index) => {
                return (
                    <label for={`ingredient-${index}`} key={`ingredient-${index}`} id={`ingredient-${index}`}>
                    
                        <Input key={index} id={index} name={`ingredient-${index}`} value={ingredient} />

                    { ingredientList.length > 1 ? 
                        <ActionButton type='remove' onClick={ () => removeIngredient(index) }/> 
                        : ''
                    }

                    {
                        index === ingredientList.length - 1 ?
                            <ActionButton type='add' onClick={addIngredient} />
                            : ''
                    }
                    
                    </label>
                )
                //<Input key={index} id={index} />
            })}

            <div>
                <ActionButton type='search' onClick={ () => this.searchRecipe() } />
            </div>
        </div>
    )
}

export default FormByIngredient;